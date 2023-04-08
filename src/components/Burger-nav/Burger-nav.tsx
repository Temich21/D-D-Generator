import React, { createContext, useState } from 'react'

interface props {
    children: JSX.Element | JSX.Element[]
}

interface BurgerContextType {
    burger: boolean
    toggleBurger?: () => void
}

const defaultState = {
    burger: false,
};

export const BurgerContext = createContext<BurgerContextType>(defaultState)


export const BurgerProvider = ({ children }: props) => {
    const [burger, setBurger] = useState(defaultState.burger)

    function toggleBurger(): void {
        setBurger(prevBurger => !prevBurger)
    }

    return (
        <BurgerContext.Provider value={{ burger, toggleBurger }}>
            {children}
        </BurgerContext.Provider>
    )
}
