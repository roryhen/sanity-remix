type Props = {
  imageOnLeft?: boolean
  heading?: string
  paragraph?: string
  children?: React.ReactNode
}

export default function ImageWithText(props: Props) {
  return (
    <section>
      <div className={`flex flex-col`}>
        <div>
          {props.heading && <h2>{props.heading}</h2>}
          {props.paragraph && <p>{props.paragraph}</p>}
        </div>
        {props.children && <div>{props.children}</div>}
      </div>
    </section>
  )
}
