import React from "react"
import styles from "./ButtonElement.module.scss"

interface buttonName {
    name: string
    clickFuntion: (event: React.MouseEvent) => void | ((value: React.SetStateAction<string>) => void)
}

export const ButtonElement = ({ name, clickFuntion }: buttonName) => {
    return (
        <button className={styles.button} onClick={clickFuntion}>{name}</button>
    )
} 
