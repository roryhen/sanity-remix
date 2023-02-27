import {Link, useRouteLoaderData} from '@remix-run/react'
import Logo from '~/components/Logo'
import type {GlobalDocument} from '~/types/global'
import {Facebook, Instagram, Twitter, Youtube} from 'lucide-react'

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  pinterest: Youtube,
}

export default function Footer() {
  const {global} = useRouteLoaderData('root') as {global: GlobalDocument}

  return (
    <header className="bg-very-light-green text-dark-mod-green">
      <div className="container mx-auto grid justify-items-center gap-10 py-16 px-8">
        <Logo footer />
        <nav aria-label="footer">
          <ul className="flex items-center gap-8">
            <li>
              <Link to="#about" className=" p-3">
                About
              </Link>
            </li>
            <li>
              <Link to="#services" className=" p-3">
                Services
              </Link>
            </li>
            <li>
              <Link to="#projects" className=" p-3">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="mt-10 flex gap-6">
          {global.socialLinks.map((link, i) => {
            if (!link.icon) return null
            const Icon = icons[link.icon as keyof typeof icons]
            return (
              <li key={i}>
                <a href={link.url ?? ''} rel="noopener" title={link.icon}>
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
