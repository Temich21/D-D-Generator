import Head from 'next/head'
import { useContext } from 'react'
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'
import { BurgerProvider } from '../components/Burger-nav/Burger-nav'
import { CharacterForm } from '../components/CharacterForm/CharacterForm'

export default function Home() {
    return (
        <>
            <BurgerProvider>
                <Header>
                </Header>
                <Navigation />
                <CharacterForm />
            </BurgerProvider >
        </>
    )
}
