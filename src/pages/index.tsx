import Head from 'next/head'
import { useContext } from 'react'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { BurgerProvider } from './components/Burger-nav/Burger-nav'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <BurgerProvider>
        <Header />
        <Navigation />
        <div className={styles.text}>Welcome to our D&D website!</div>
      </BurgerProvider >
    </>
  )
}
