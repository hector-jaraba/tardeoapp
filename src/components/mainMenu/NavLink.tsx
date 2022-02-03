import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  href: string
  activeClass?: string
}

const NavLink: React.FC<Props> = ({ children, href, activeClass }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref>
      <a className={router.pathname === href ? activeClass : ''}>{children}</a>
    </Link>
  )
}

NavLink.defaultProps = {
  activeClass: 'active',
}

export default NavLink
