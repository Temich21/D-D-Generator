import Head from 'next/head'
import { useReducer, useState, useRef, Reducer } from "react"
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'
import { BurgerProvider } from '../components/Burger-nav/Burger-nav'
import { CharacterForm } from '../components/CharacterForm/CharacterForm'
import { useReactToPrint } from "react-to-print"
import { Loading } from '@component/components/Loading/Loading'
import { ButtonElement } from "../components/ButtonElement/ButtonElement"
import { CharacterSheet } from "../components/Dnd-character-sheet/CharacterSheet"
import defaultStoreCharacterSheet, {
    CharacterListFields,
} from "@component/store/defaultStoreCharacterSheet"
import reducerCharacterSheet, { ActionTypeCharacterSheet } from "@component/store/reducerCharacterSheet"
import defaultStoreCharactetForm, {
    CharacterFormFields,
} from "@component/store/defaultStoreCharacterForm"
import reducerCharacterForm, { ActionTypeCharacterForm } from "@component/store/reducerCharacterForm"
import { createActions } from "@component/store/actionsCharacterSheet"
import { backendUrl } from "../costants"

export default function CharacterGenerator() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "emp-data",
    });

    const [characterForm, characterFormSet] = useState(true)
    const [loading, loadingSet] = useState(false)
    const [characterSheet, characterSheetSet] = useState(false)

    const [dataForm] = useReducer<Reducer<CharacterFormFields, ActionTypeCharacterForm>>(reducerCharacterForm, defaultStoreCharactetForm)

    const [dataSheet, dispatchSheet] = useReducer<Reducer<CharacterListFields, ActionTypeCharacterSheet>>(
        reducerCharacterSheet,
        defaultStoreCharacterSheet
    )
    const actions = createActions(dataSheet, dispatchSheet);

    let handleSubmit = async (event: React.ChangeEvent) => {
        characterFormSet(false)
        loadingSet(true)

        const message = {
            message: `Create me a D&D character, name is ${dataForm.characterName}, level ${dataForm.level === '' ? 1 : dataForm.level}, ${dataForm.class}, ${dataForm.race} , ${dataForm.background} background, ${dataForm.alignment} alignment, bio key words: ${dataForm.bio}, 
            example how it looks like {\"characterName\": \"Will Roberts\", \"characterClassAndLevel\": \"Warrior 3\", \"characterRace\": \"Human\", \"characterBackground\": \"Noble\", \"characterAlignment\": \"Lawful Good\", \"characterStrength\": 16, \"characterStrengthmod\": \"+3\", 
            \"characterDexterity\": 14, \"characterDexteritymod\": \"+2\",\"characterConstitution\": 14, \"characterConstitutionmod\": \"+2\", \"characterIntelligence\":10, \"characterIntelligencemod\": \"0\",\"characterWisdom\":12, \"characterWisdommod\": \"+1\",\"characterCharisma\":10, 
            \"characterCharismamod\": \"0\", \"characterProficiencyBonus\": \"+2\", \"characterStrengthSave\" : \"+5\", \"StrengthSaveProf\" : true, \"characterDexteritySave\" : \"+2\", \"DexteritySaveProf\" : false, \"characterConstitutionSave\" : \"+4\", \"ConstitutionSaveProf\" : true, 
            \"characterWisdomSave\" : \"+1\", \"WisdomSaveProf\" : false, \"characterIntelligenceSave\" : \"0\", \"IntelligenceSaveProf\" : false, \"characterCharismaSave\" : \"0\", \"CharismaSaveProf\" : false, \"characterArmorClass\": 16, \"characterInitiative\": \"+2\", \"characterSpeed\": 30, 
            \"characterMaxHP\": 28, \"characterCurrentHP\": 28, \"characterTotalHD\": \"3d10\", \"characterRemainingHD\": \"3d10\", \"characterPersonality\": \"I attract so much flattery that everyone I talk to goes about their business as wonderful and important people in the world.\", 
            \"characterIdeals\": \"Independence. I have to prove that I can manage without the care of my family.\", \"characterBonds\": \"My loyalty to the ruler is unwavering.\", \"characterFlaws\": \"I have heard veiled insults and threats too often, and therefore I quickly fall into anger.\", 
            \"characterBio\": \"A proud warrior, born of a long line of warriors, who has trained since childhood to become a master of combat\", \"characterEquipment\": \"Longsword, Shield, Chainmail, Dagger, Rations, Waterskin, A set of excellent clothes, a signet ring, a scroll with a family tree, a purse containing 25 gp\"}. 
            Calculate characteristics by Point Buy System. Inventory depends on background. Send it in JSON.`
        }
        const data1 = {
            message: 'What is your name?'
        }
        const body = {
            name: "\n\n{\"characterName\": \"Wild Ragnar\", \"characterClassAndLevel\": \"Wizard 5\", \"characterRace\": \"Elf\", \"characterBackground\": \"Criminal\", \"characterAlignment\": \"Neutral Good\", \"characterStrength\": 10, \"characterStrengthmod\": \"0\", \"characterDexterity\": 14, \"characterDexteritymod\": \"+2\", \"characterConstitution\": 14, \"characterConstitutionmod\": \"+2\", \"characterIntelligence\": 16, \"characterIntelligencemod\": \"+3\", \"characterWisdom\": 10, \"characterWisdommod\": \"0\", \"characterCharisma\": 12, \"characterCharismamod\": \"+1\", \"characterProficiencyBonus\": \"+3\", \"characterStrengthSave\" : \"0\", \"StrengthSaveProf\" : false, \"characterDexteritySave\" : \"+5\", \"DexteritySaveProf\" : true, \"characterConstitutionSave\" : \"+4\", \"ConstitutionSaveProf\" : true, \"characterWisdomSave\" : \"+1\", \"WisdomSaveProf\" : false, \"characterIntelligenceSave\" : \"+6\", \"IntelligenceSaveProf\" : true, \"characterCharismaSave\" : \"+3\", \"CharismaSaveProf\" : false, \"characterArmorClass\": 12, \"characterInitiative\": \"+2\", \"characterSpeed\": 30, \"characterMaxHP\": 25, \"characterCurrentHP\": 25, \"characterTotalHD\": \"5d6\", \"characterRemainingHD\": \"5d6\", \"characterPersonality\": \"I am always looking for a way to make a quick buck, and I'm not afraid to take risks to get it.\", \"characterIdeals\": \"I strive to make a name for myself and become a respected figure in the criminal underworld.\", \"characterBonds\": \"I lost my people and my wife in a tragic event, and I will do anything to avenge them.\", \"characterFlaws\": \"I am easily tempted by wealth and power, and I will do anything to get it.\", \"characterBio\": \"Wild Ragnar is an elf wizard who has a criminal background. He lost his people and his wife in a tragic event, and he is determined to avenge them. He is always looking for a way to make a quick buck, and he is not afraid to take risks to get it. He strives to make a name for himself and become a respected figure in the criminal underworld.\", \"characterEquipment\": \"Quarterstaff, Spellbook, Spell Components, Thieves' Tools, Backpack, Bedroll, Mess Kit, Tinderbox, 10 Torches, 10 Days of Rations, Waterskin, 50 ft of Hempen Rope, a set of Traveler's Clothes, a Belt Pouch containing 15 gp\"}",
            age: 25
        }
        event.preventDefault()
        const settings = {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body
            })
        }

        try {
            const data = await fetch(backendUrl, settings)
            const serverResponse = await data.json()
            // const GPTAnswer = await serverResponse.body.name.json()
            // console.log(serverData.choices[0].text)
            // serverResponse = JSON.parse(serverData.choices[0].text)
            // dispatchGenerator({ type: 'loading', payload: false })
            // console.log(dataGenerator.characterForm, dataGenerator.loading)
            console.log(JSON.parse(serverResponse.body.name))
            const GPTAnswer = JSON.parse(serverResponse.body.name)
            dispatchSheet({ type: "CharacterFetch", payload: GPTAnswer })
            loadingSet(false)
            characterSheetSet(true)
            console.log(dataSheet)

        }
        catch (err) {
            alert(err)
            console.log(err);
        }
    };

    const hadleBack = () => {
        characterSheetSet(false)
        characterFormSet(true)
    }

    return (
        <>
            <BurgerProvider>
                <Header>
                    {characterSheet && <ButtonElement name="Dowload" clickFuntion={handlePrint} />}
                    {characterSheet && <ButtonElement name="Back to form" clickFuntion={hadleBack} />}
                </Header>
                <Navigation />
                {characterForm &&
                    <CharacterForm>
                        <ButtonElement name='Submit' clickFuntion={handleSubmit} />
                    </CharacterForm>}

                {loading && <Loading />}

                {characterSheet &&
                    <CharacterSheet
                        componentReference={componentRef}
                        data={dataSheet}
                        dispatch={actions}
                    />}
            </BurgerProvider >
        </>
    )
}


