import React, { useContext, useReducer } from "react";
import { BurgerContext } from "../Burger-nav/Burger-nav";
import styles from "./CharacterForm.module.scss"
import { ButtonElement } from "../ButtonElement/ButtonElement";


export const CharacterForm = () => {
    const { burger } = useContext(BurgerContext);
    let handleSubmit = async (event: React.ChangeEvent) => {
        event.preventDefault()
        try {
            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    ...data
                }),
            });
            let resJson = await res.json()
        } catch (err) {
            alert(err)
            console.log(err);
        }
    };

    const formData = {
        characterName: '',
        class: 'random',
        race: 'random',
        background: 'random',
        alignment: 'random',
        bio: '',
    }

    type ActionType = {
        type: string
        payload: string
    }

    const reducer = (state: any, action: ActionType) => {
        switch (action.type) {
            case 'clearForm':
                return {
                    ...formData
                }
            case 'characterNameChange':
                return {
                    ...state,
                    characterName: action.payload
                }
            case 'classChange':
                return {
                    ...state,
                    class: action.payload
                }
            case 'raceChange':
                return {
                    ...state,
                    race: action.payload
                }
            case 'backgroundChange':
                return {
                    ...state,
                    background: action.payload
                }
            case 'alignmentChange':
                return {
                    ...state,
                    alignment: action.payload
                }
            case 'bioChange':
                return {
                    ...state,
                    bio: action.payload
                }
            default:
                return state
        }
    }

    const [data, dispatch] = useReducer(reducer, formData)

    return (
        <form
            className={styles.form}
            style={{ marginLeft: (!burger ? '270px' : '10px') }}>
            <div className={styles.content}>
                <label htmlFor="characterName">Character name:</label>
                <input className={styles.options + ' ' + styles.inputName}
                    name="characterName"
                    type="text"
                    value={data.characterName}
                    onChange={(event) => dispatch({ type: 'characterNameChange', payload: event.target.value })} />
            </div>
            <div className={styles.content}>
                <label htmlFor="class">Choose your class:</label>
                <select className={styles.options}
                    value={data.class}
                    onChange={(event) => dispatch({ type: 'classChange', payload: event.target.value })}>
                    <option value="random">Random</option>
                    <option value="barbarian">Barbarian</option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                    <option value="artificer">Artificer</option>
                </select>
            </div>
            <div className={styles.content}>
                <label htmlFor="race">Choose your race:</label>
                <select className={styles.options}
                    value={data.race}
                    onChange={(event) => dispatch({ type: 'raceChange', payload: event.target.value })}>
                    <option value="random">Random</option>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="halfling">Halfling</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="human">Human</option>
                    <option value="ranger">Tiefling</option>
                </select>
            </div>
            <div className={styles.content}>
                <label htmlFor="background">Choose your background:</label>
                <select className={styles.options}
                    value={data.background}
                    onChange={(event) => dispatch({ type: 'backgroundChange', payload: event.target.value })}>
                    <option value="random">Random</option>
                    <option value="acolyte">Acolyte</option>
                    <option value="charlatan">Charlatan</option>
                    <option value="criminal">Criminal</option>
                    <option value="entertainer">Entertainer</option>
                    <option value="folk hero">Folk Hero</option>
                    <option value="guild artisan">Guild Artisan</option>
                    <option value="hermit">Hermit</option>
                    <option value="outlander">Outlander</option>
                    <option value="noble">Noble</option>
                    <option value="sage">Sage</option>
                    <option value="sailor">Sailor</option>
                    <option value="soldier">Soldier</option>
                    <option value="urchin">Urchin</option>
                </select>
            </div>
            <div className={styles.content}>
                <label htmlFor="alignment">Choose your Alignment:</label>
                <select className={styles.options}
                    value={data.alignment}
                    onChange={(event) => dispatch({ type: 'alignmentChange', payload: event.target.value })}>
                    <option value="random">Random</option>
                    <option value="lawful good">Lawful Good</option>
                    <option value="neutral good">Neutral Good</option>
                    <option value="chaotic good">Chaotic Good</option>
                    <option value="lawful neutral">Lawful Neutral</option>
                    <option value="true neutral">True Neutral</option>
                    <option value="chaotic neutral">Chaotic Neutral</option>
                    <option value="lawful evil">Lawful Evil</option>
                    <option value="neutral evil">Neutral Evil</option>
                    <option value="chaotic evil">Chaotic Evil</option>
                </select>
            </div>
            <div className={styles.content + ' ' + styles.bio}>
                <label htmlFor="bio">Write key words for your bio:</label>
                <textarea name="bio"
                    className={styles.bioText}
                    value={data.bio}
                    onChange={(event) => dispatch({ type: 'bioChange', payload: event.target.value })}></textarea>
            </div>
            <div className={styles.contentButton}>
                <ButtonElement name='Submit' clickFuntion={handleSubmit} />
            </div>
        </form>
    )
}
