import arrowSVG from 'public/icons/icon-arrow-down.svg'
import {urlFor} from '~/lib/imageBuilder'

type Props = {
  title: string | null
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
        className={`relative mx-auto grid max-h-[40rem] min-h-[80vh] grid-rows-[1fr_1fr_2fr_2fr] place-items-center lg:container lg:min-h-0 ${
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
        <h1 className="col-start-1 row-start-2 px-4 text-center font-serif text-4xl uppercase leading-tight tracking-widest lg:text-5xl">
          {props.title}
        </h1>
        <img className="col-start-1 row-start-3" src={arrowSVG} alt="" width="36" height="114" />
      </div>
    </section>
  )
}
