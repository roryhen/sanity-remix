import {NavLink} from 'react-router'

type Props = {
  isShown?: boolean
}

export default function Navigation(props: Props) {
  return (
    <nav
      className={`before:clip-right-triangle fixed left-4 right-4 top-24 bg-white p-6 text-very-dark-gray-blue transition-all duration-200 ease-out before:absolute before:-top-8 before:right-0 before:block before:h-8 before:w-8 before:bg-white lg:visible lg:relative lg:left-auto lg:right-auto lg:top-0 lg:translate-y-0 lg:bg-transparent lg:p-0 lg:text-white lg:opacity-100 lg:before:hidden ${
        props.isShown ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
      }`}
      aria-label="main"
    >
      <ul className="flex flex-col items-center gap-6 lg:flex-row">
        <li>
          <NavLink to="#about" className="p-3">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="#services" className="p-3">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="#projects" className="p-3">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#contact"
            className="inline-block rounded-full bg-yellow px-6 py-4 font-serif text-[0.875rem] uppercase text-black lg:bg-white lg:hover:bg-[#FFFFFF44] lg:hover:text-white"
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
