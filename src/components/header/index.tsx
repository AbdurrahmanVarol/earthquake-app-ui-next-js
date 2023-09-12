import React from 'react'
import Styles from './styles.module.css'
import { FaPlayCircle, FaGlobe } from 'react-icons/fa'
import Link from 'next/link'
import { WebSiteType } from '@/models/enums/WebSiteType'

const Header = () => {
  return (
    <header className={`${Styles.header} container fluid`}>
      <div className={Styles.headerWrapper}>
        <Link href="/" className={Styles.logo}>
          <FaGlobe /> Earthquake App
        </Link>
        <nav className={Styles.navigationMenu}>
          <Link href={`${WebSiteType[1]}?page=0`}>Afad</Link>
          <Link href={`${WebSiteType[2]}?page=0`}>Kandilli</Link>
          <Link href="">Harita</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header