import {Link} from '@remix-run/react'

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#services">Services</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}
