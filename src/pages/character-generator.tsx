import Head from 'next/head'
import { useReducer, useContext, useRef, Reducer } from "react"
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'
import { BurgerProvider } from '../components/Burger-nav/Burger-nav'
import { CharacterFormProvider, CharacterFormContext } from '../store/characterFormContext'
import { CharacterForm } from '../components/CharacterForm/CharacterForm'
import { useReactToPrint } from "react-to-print"
import { Loading } from '@component/components/Loading/Loading'
import { ButtonElement } from "../components/ButtonElement/ButtonElement"
import { CharacterSheet } from "../components/Dnd-character-sheet/CharacterSheet";
import reducer, { ActionTypeCharacterSheet } from "@component/store/reducerCharacterSheet"
import defaultStoreCharacterSheet, {
    CharacterListFields,
} from "@component/store/defaultStoreCharacterSheet"
import { createActions } from "@component/store/actionsCharacterSheet"
import serverResponse from '../components/CharacterForm/CharacterForm'


export default function CharacterGenerator() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "emp-data",
    });

    const [data, dispatch] = useReducer<Reducer<CharacterListFields, ActionTypeCharacterSheet>>(
        reducer,
        defaultStoreCharacterSheet
    );
    const actions = createActions(data, dispatch);

    const { characterFormState, toggleCharacterForm } = useContext(CharacterFormContext)

    return (
        <>
            <BurgerProvider>
                <CharacterFormProvider>
                    <Header>
                        {serverResponse ? <ButtonElement name="Dowload" clickFuntion={handlePrint} /> : null}
                    </Header>
                    <Navigation />
                    {characterFormState ? <CharacterForm /> : null}
                    <Loading />
                    {serverResponse ?
                        <CharacterSheet
                            componentReference={componentRef}
                            data={data}
                            dispatch={actions}
                        /> : null}

                </CharacterFormProvider >
            </BurgerProvider >
        </>
    )
}
