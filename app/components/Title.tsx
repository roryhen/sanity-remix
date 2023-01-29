import React from 'react'
import type {PropsWithChildren} from 'react'

export default function Title(props: PropsWithChildren) {
  return props.children ? (
    <h1 className="uppercase font-serif text-center tracking-widest max-w-4xl text-4xl lg:text-5xl xl:text-8xl">
      {props.children}
    </h1>
  ) : null
}
