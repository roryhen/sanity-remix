import {useQuery} from '@sanity/react-loader'
import Hero from '~/components/Hero'
import ImageWithCaption from '~/components/ImageWithCaption'
import ImageWithText from '~/components/ImageWithText'
import Quote from '~/components/Quote'
import {urlFor} from '~/lib/imageBuilder'
import {loadQuery} from '~/sanity/loader.server'
import {loadQueryOptions} from '~/sanity/loadQueryOptions'
import {HomeDocument, homeQuery} from '~/types/home'
import {PromptDocument, promptsQuery} from '~/types/prompts'
import {ServiceDocument, servicesQuery} from '~/types/services'
import {TestimonialDocument, testimonialsQuery} from '~/types/testimonials'
import type {Route} from './+types/home'

export const meta: Route.MetaFunction = ({data, matches}) => {
  const title = data?.home.data.title
  const siteTitle = matches[1].data.initial.data.siteTitle

  return [
    {
      title: [title, siteTitle].filter(Boolean).join(' | '),
    },
  ]
}

export const loader = async ({request}: Route.LoaderArgs) => {
  const params = {}
  const {options} = await loadQueryOptions(request.headers)
  const [home, prompts, services, testimonials] = await Promise.all([
    loadQuery<HomeDocument>(homeQuery, params, options),
    loadQuery<PromptDocument[]>(promptsQuery, params, options),
    loadQuery<ServiceDocument[]>(servicesQuery, params, options),
    loadQuery<TestimonialDocument[]>(testimonialsQuery, params, options),
  ])

  return {
    home,
    prompts,
    services,
    testimonials,
  }
}

export default function Index({loaderData}: Route.ComponentProps) {
  const params = {}
  const {data: home} = useQuery<HomeDocument>(homeQuery, params, {initial: loaderData.home})
  const {data: prompts} = useQuery<PromptDocument[]>(promptsQuery, params, {
    initial: loaderData.prompts,
  })
  const {data: services} = useQuery<ServiceDocument[]>(servicesQuery, params, {
    initial: loaderData.services,
  })
  const {data: testimonials} = useQuery<TestimonialDocument[]>(testimonialsQuery, params, {
    initial: loaderData.testimonials,
  })

  return (
    <>
      <Hero darkBG title={home.title} image={home.hero} />
      {prompts?.map((prompt, i) => (
        <ImageWithText
          heading={prompt.title}
          paragraph={prompt.description}
          imageOnRight={i % 2 === 0}
          accentColor={i % 2 === 0 ? 'after:bg-soft-red' : 'after:bg-yellow'}
          key={i}
        >
          {prompt.image && (
            <img
              className="h-full w-full object-cover"
              src={urlFor(prompt.image).width(800).auto('format').url()}
              alt={prompt.image.alt ?? prompt.title ?? ''}
            />
          )}
        </ImageWithText>
      ))}
      <section className="lg:grid lg:grid-cols-2">
        {services?.map((service, i) => (
          <ImageWithCaption
            heading={service.title}
            paragraph={service.description}
            textColor={i % 2 === 0 ? 'text-dark-desat-green' : 'text-dark-blue'}
            key={i}
          >
            {service.image && (
              <img
                className="h-full w-full object-cover"
                src={urlFor(service.image).width(800).auto('format').url()}
                alt={service.image.alt ?? service.title ?? ''}
              />
            )}
          </ImageWithCaption>
        ))}
      </section>
      <section className="mx-auto px-8 py-16 lg:container lg:px-20 lg:py-36">
        <h2 className="text-dark-gray-blue mb-16 text-center font-serif tracking-[0.3em] uppercase lg:text-lg">
          Client Testimonials
        </h2>
        <div className="grid gap-x-10 gap-y-20 lg:grid-flow-col">
          {testimonials?.map((testimonial, i) => (
            <Quote
              quote={testimonial.description}
              name={testimonial.name}
              title={testimonial.title}
              key={i}
            >
              {testimonial.image && (
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={urlFor(testimonial.image).width(80).auto('format').url()}
                  alt={testimonial.image.alt ?? testimonial.title ?? ''}
                />
              )}
            </Quote>
          ))}
        </div>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {home?.gallery?.map(
          (image, i) =>
            image && (
              <img
                className="-ml-[0.1px] aspect-square h-full w-full object-cover lg:aspect-auto"
                src={urlFor(image).width(500).auto('format').url()}
                alt={image.alt ?? ''}
                key={i}
              />
            ),
        )}
      </div>
    </>
  )
}
