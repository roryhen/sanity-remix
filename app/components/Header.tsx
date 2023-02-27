import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'
import hamburgerIcon from 'public/icons/icon-hamburger.svg'
import {useState} from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-cyan">
      <div className="container mx-auto flex items-center justify-between px-4 py-7 lg:px-12">
        <Logo />
        <Navigation isShown={isOpen} />
        <button
          className="lg:hidden"
          type="button"
          aria-label="open menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img src={hamburgerIcon} alt="" width="24" height="18" />
        </button>
      </div>
    </header>
  )
}
