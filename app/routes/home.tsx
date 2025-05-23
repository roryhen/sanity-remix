import ExitPreview from '~/components/ExitPreview'
import Hero from '~/components/Hero'
import ImageWithCaption from '~/components/ImageWithCaption'
import ImageWithText from '~/components/ImageWithText'
import Layout from '~/components/Layout'
import Quote from '~/components/Quote'
import {urlFor} from '~/lib/imageBuilder'
import {getHome} from '~/queries/home.groq'
import {getPrompts} from '~/queries/prompts.groq'
import {getServices} from '~/queries/services.groq'
import {getTestimonials} from '~/queries/testimonials.groq'
import {getSession} from '~/sessions'
import type {Route} from './+types/home'

export const meta: Route.MetaFunction = ({data, matches}) => {
  const rootMeta = matches[0].meta
  const rootData = matches[0].data
  const title = data?.home?.title

  return [
    ...rootMeta,
    {
      title: [title, rootData.global?.siteTitle].filter(Boolean).join(' | '),
    },
  ]
}

function getPromiseValue<T>(result: PromiseSettledResult<T>) {
  return result.status === 'fulfilled' ? result.value : null
}

export const loader = async ({request}: Route.LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const token = session.get('token')
  const preview = Boolean(token)

  const [home, prompts, services, testimonials] = await Promise.allSettled([
    getHome(preview),
    getPrompts(preview),
    getServices(preview),
    getTestimonials(preview),
  ])

  return {
    preview,
    home: getPromiseValue(home),
    prompts: getPromiseValue(prompts),
    services: getPromiseValue(services),
    testimonials: getPromiseValue(testimonials),
  }
}

export default function Index({loaderData}: Route.ComponentProps) {
  const {preview, home, prompts, services, testimonials} = loaderData

  return (
    <Layout>
      <Hero
        darkBG
        title={home?.title}
        image={{id: home?.heroImage ?? '', alt: 'Close up of orange slice'}}
      />
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
              alt={prompt.title ?? ''}
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
                alt={service.title ?? ''}
              />
            )}
          </ImageWithCaption>
        ))}
      </section>
      <section className="mx-auto px-8 py-16 lg:container lg:px-20 lg:py-36">
        <h2 className="mb-16 text-center font-serif uppercase tracking-[0.3em] text-dark-gray-blue lg:text-lg">
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
                  alt={testimonial.title ?? ''}
                />
              )}
            </Quote>
          ))}
        </div>
      </section>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {home?.gallery?.map(
          (item, i) =>
            item.image && (
              <img
                className="-ml-[0.1px] aspect-square h-full w-full object-cover lg:aspect-auto"
                src={urlFor(item.image).width(500).auto('format').url()}
                alt=""
                key={i}
              />
            ),
        )}
      </div>
      {preview && <ExitPreview />}
    </Layout>
  )
}
