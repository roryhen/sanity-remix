import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'
import hamburgerIcon from '/icons/icon-hamburger.svg?url'
import {useState} from 'react'
import {GlobalDocument} from '~/types/global'

export default function Header({global}: {global: GlobalDocument}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-cyan fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4 py-7 lg:px-12">
        <Logo global={global} />
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
