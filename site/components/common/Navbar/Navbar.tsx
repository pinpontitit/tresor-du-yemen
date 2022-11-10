import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container, Button } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import Image from 'next/image'
/* import { useUI } from '@components/ui/context' */

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

/* const SearchBarDesktop: React.FC = () => {
  const { displaySearchBar, closeSearchBar } = useUI()
  return displaySearchBar ? (
    <Searchbar className="justify-center flex-1 hidden lg:flex " />
  ) : null
} */

/* const SearchBarMobile: React.FC = () => {
  const { displaySearchBar, closeSearchBar } = useUI()
  return displaySearchBar ? (
    <div className="flex pb-4 lg:px-40 xl:px-96">
      <Searchbar id="mobile-search" />
    </div>
  ) : null
} */

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container clean className="mx-auto max-w-8xl px-6">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              {/* <Logo /> */}
              <Image
                src="/text3.jpeg"
                height={30}
                width={155}
                alt="Logo Trésor du Yémen"
                priority
              />
            </a>
          </Link>
          <nav className={s.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
        {/* {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="justify-center flex-1 hidden lg:flex"> Version Originale avec barre au centre (ça poussait les sections du menu)
            <Searchbar />
          </div>
        )} */}
        <div className="flex items-center justify-end space-x-8">
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <Searchbar className="justify-center flex-1 hidden xl:flex" />
          )}
          {/* <SearchBarDesktop /> autre version où la barre n'apparait que lorsqu'on clique sur l'icone*/}
          <UserNav />
        </div>
      </div>
      {process.env.COMMERCE_SEARCH_ENABLED && (
        <div className="flex pb-4 lg:px-6 xl:hidden">
          <Searchbar id="mobile-search" />
        </div>
      )}
      {/* <SearchBarMobile /> autre version où la barre n'apparait que lorsqu'on clique sur l'icone */}
    </Container>
  </NavbarRoot>
)

export default Navbar
