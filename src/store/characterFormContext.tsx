import { createContext, useState } from 'react'

interface props {
    children: JSX.Element | JSX.Element[]
}

interface characterFormContextType {
    characterFormState: boolean
    toggleCharacterForm?: () => void
}

const defaultState = {
    characterFormState: true,
};

export const CharacterFormContext = createContext<characterFormContextType>(defaultState)

export const CharacterFormProvider = ({ children }: props) => {
    const [characterFormState, characterFormStateSet] = useState<boolean>(defaultState.characterFormState)

    function toggleCharacterForm(): void {
        characterFormStateSet(prevCharacterFormState => !prevCharacterFormState)
    }

    return (
        <CharacterFormContext.Provider value={{ characterFormState, toggleCharacterForm }}>
            {children}
        </CharacterFormContext.Provider>
    )
}
