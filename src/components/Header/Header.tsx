import React, { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from "./Header.module.scss"
import { BurgerContext } from "../Burger-nav/Burger-nav"

interface buttonFC {
    children: null | JSX.Element | JSX.Element[]
}

export const Header = ({ children }: buttonFC) => {
    const { burger, toggleBurger } = useContext(BurgerContext)

    return (
        <header className={styles.header}>
            <div className={styles.burger}>
                {burger ?
                    <FontAwesomeIcon
                        icon={faBars}
                        color='white'
                        size="2x"
                        onClick={toggleBurger}
                        cursor='pointer' /> :
                    <FontAwesomeIcon
                        icon={faXmark}
                        color='white'
                        size="2x"
                        onClick={toggleBurger}
                        cursor='pointer' />
                }

            </div>
            <div className={styles.Content}>
                Our name
                {children}
            </div>
        </header>
    )
}

