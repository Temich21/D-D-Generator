import React from "react"
import styles from "./ButtonElement.module.scss"

interface buttonName {
    name: string
    clickFuntion: any
}

export const ButtonElement = ({ name, clickFuntion }: buttonName) => {
    return (
        <button className={styles.button} onClick={clickFuntion}>{name}</button>
    )
} 
