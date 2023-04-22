import React, { useContext, useReducer, Reducer } from "react"
import { BurgerContext } from "../Burger-nav/Burger-nav"
import { CharacterFormContext } from "@component/store/characterFormContext"
import styles from "./CharacterForm.module.scss"
import { ButtonElement } from "../ButtonElement/ButtonElement"
import defaultStoreCharactetForm, {
    CharacterFormFields,
} from "@component/store/defaultStoreCharacterForm";
import reducer, { ActionTypeCharacterForm } from "@component/store/reducerCharacterForm"

// fetch('http://localhost:8000/api/v1/bot/send', {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: '{"message":"Make me something"}'
//     })

let serverResponse


export const CharacterForm = () => {
    const url = 'http://localhost:8000/api/v1/bot/send'

    const { burger } = useContext(BurgerContext);
    const { toggleCharacterForm } = useContext(CharacterFormContext)
    const executeFunction = (callback: any) => callback()

    const [data, dispatch] = useReducer<Reducer<CharacterFormFields, ActionTypeCharacterForm>>(reducer, defaultStoreCharactetForm)

    let handleSubmit = async (event: React.ChangeEvent) => {
        executeFunction(toggleCharacterForm) // ???????????????
        const message = {
            message: `Create me a D&D character, name is ${data.characterName}, level ${data.level === '' ? 1 : data.level}, ${data.class}, ${data.race} , ${data.background} background, ${data.alignment} alignment, bio key words: ${data.bio}, 
            example how it looks like {\"characterName\": \"Will Roberts\", \"characterClassAndLevel\": Warrior 3, \"characterRace\": \"Human\", \"Background\": \"Noble\", \"characterAlignment\": \"Lawful Good\", \"characterStrength\": 15, 
            \"characterDexterity\": 14, \"characterConstitution\": 14, \"characterIntelligence\":10, \"characterWisdom\":12, \"characterCharisma\":10, \"characterBio\": \"A proud warrior, born of a long line of warriors, who has trained since childhood to become a master of combat\", 
            \"Inventory\": \"Longsword, Shield, Chainmail, Dagger, Rations, Waterskin\"}. Send it in JSON.`
        }
        const data1 = JSON.stringify({
            message: 'Make me something'
        })
        event.preventDefault()
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', '*/*');

        try {
            fetch(url, {
                mode: "no-cors",
                method: "POST",
                headers: headers,
                body: JSON.stringify(message),
            }).then(response => {
                if (response.ok) {
                    console.log('OK')
                    response.json()
                }
                else {
                    console.log('Not OK')
                }
            }).then((serverData: any) => {
                console.log(serverData)
                console.log(serverData.choices[0].text)
                serverResponse = JSON.parse(serverData.choices[0].text)
            })
        } catch (err) {
            alert(err)
            console.log(err);
        }
    };

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
                <label htmlFor="level">Input your level:</label>
                <input className={styles.options + ' ' + styles.inputLevel}
                    name="level"
                    type="number"
                    placeholder="From 1 to 20, default 1"
                    value={data.level}
                    onChange={(event) => dispatch({ type: 'levelChange', payload: event.target.value })} />
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
                    placeholder="Enter your bio here..."
                    onChange={(event) => dispatch({ type: 'bioChange', payload: event.target.value })}></textarea>
            </div>
            <div className={styles.contentButton}>
                <ButtonElement name='Submit' clickFuntion={handleSubmit} />
                <ButtonElement name="Clear" clickFuntion={(event: React.ChangeEvent) => {
                    event.preventDefault()
                    dispatch({ type: 'clearForm', payload: defaultStoreCharactetForm })
                }} />
            </div>
        </form>
    )
}

export default serverResponse;
