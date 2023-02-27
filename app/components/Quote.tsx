type Props = {
  title?: string | null
  name?: string | null
  quote?: string | null
  children?: React.ReactNode
}

export default function Quote(props: Props) {
  return (
    <figure className="mx-auto max-w-xl text-center">
      <blockquote className="mb-8 grid gap-8">
        <p className="place-self-center">{props.children}</p>
        <p className="text-very-dark-gray-blue">{props.quote}</p>
      </blockquote>
      <figcaption>
        <p className="mb-2 font-serif">{props.name}</p>
        <p className="text-[0.875rem] text-gray-blue">{props.title}</p>
      </figcaption>
    </figure>
  )
}
