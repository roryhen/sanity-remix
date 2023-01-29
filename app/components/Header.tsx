import ThemeToggle from '~/components/ThemeToggle'
import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Logo />
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  )
}
