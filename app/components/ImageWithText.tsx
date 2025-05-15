import {Link} from 'react-router'

type Props = {
  imageOnRight?: boolean
  heading?: string | null
  paragraph?: string | null
  children?: React.ReactNode
  accentColor?: string
}

export default function ImageWithText(props: Props) {
  return (
    <section>
      <div className="grid lg:auto-cols-fr lg:grid-flow-col">
        {props.children && (
          <div className={`${props.imageOnRight ? 'lg:col-start-2' : ''}`}>{props.children}</div>
        )}
        <div className="grid max-w-xl justify-items-center gap-6 place-self-center px-8 py-12 text-center lg:max-w-md lg:justify-items-start lg:text-left">
          {props.heading && (
            <h2 className="font-serif text-3xl leading-tight text-very-dark-desat-blue">
              {props.heading}
            </h2>
          )}
          {props.paragraph && <p className="text-dark-gray-blue">{props.paragraph}</p>}
          <Link
            to="#learn-more"
            className={`font-serif text-sm uppercase tracking-wider after:-z-10 after:-mx-2 after:-mt-2 after:block after:h-2 after:rounded-full after:opacity-40 ${props.accentColor}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
