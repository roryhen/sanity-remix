import arrowSVG from 'public/icons/icon-arrow-down.svg'
import {urlFor} from '~/lib/imageBuilder'

type Props = {
  title?: string | null
  darkBG?: boolean
  image?: {
    id: string
    alt: string
  }
}

export default function Hero(props: Props) {
  return (
    <section className="bg-cyan">
      <div
        className={`relative mx-auto grid min-h-[90vh] grid-rows-4 justify-items-center lg:container lg:min-h-0 lg:grid-rows-[1fr_1fr_1fr_2fr] ${
          props.darkBG ? 'text-white' : ''
        }`}
      >
        {props.image?.id && (
          <img
            className="col-start-1 row-span-full h-full w-full object-cover object-bottom"
            src={urlFor(props.image.id).width(1920).auto('format').url()}
            alt={props.image?.alt}
          />
        )}
        <h1 className="col-start-1 row-start-2 self-center p-4 text-center font-serif text-4xl uppercase leading-tight tracking-[0.3em] lg:text-6xl">
          {props.title}
        </h1>
        <img
          className="col-start-1 row-start-3 self-center"
          src={arrowSVG}
          alt=""
          width="36"
          height="114"
        />
      </div>
    </section>
  )
}
