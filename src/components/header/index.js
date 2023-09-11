import React from 'react'
import Styles from './styles.module.css'
import { FaPlayCircle,FaGlobe } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={`${Styles.header} container fluid`}>
          <div className={Styles.headerWrapper}>
        <Link href="/" className={Styles.logo}>
          <FaGlobe /> Earthquake App
        </Link>
        <nav className={Styles.navigationMenu}>
          <Link href="">Afad</Link>
          <Link href="">Kandilli</Link>
          <Link href="">Harita</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header