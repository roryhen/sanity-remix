type Props = {
  heading?: string | null
  paragraph?: string | null
  children?: React.ReactNode
  textColor?: string
}

export default function ImageWithText(props: Props) {
  return (
    <div className="-ml-[0.1px] grid grid-rows-3">
      {props.children && <div className="col-start-1 row-start-1 row-end-4">{props.children}</div>}
      <div
        className={`col-start-1 row-start-3 row-end-4 mx-auto grid max-w-xl gap-6 self-start px-4 pb-12 text-center ${
          props.textColor ? props.textColor : 'text-very-dark-desat-blue'
        }`}
      >
        {props.heading && <h2 className="font-serif text-2xl">{props.heading}</h2>}
        {props.paragraph && <p className="text-sm">{props.paragraph}</p>}
      </div>
    </div>
  )
}
