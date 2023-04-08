import { useReducer } from "react";

const characterObj = {
    characterName: '',
    characteClassAndLevel: '',
    characteBackground: '',
    charactePlayerName: '',
    characteRace: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'characterClear':
            return {
                ...characterObj
            }
        case 'characterNameChange':
            return {
                ...state,
                characterName: action.payload
            }
        case 'characterClassAndLevelChange':
            return {
                ...state,
                characteClassAndLevel: action.payload
            }
        case 'characterBackgroundChange':
            return {
                ...state,
                characteBackground: action.payload
            }
        case 'charactePlayerNameChange':
            return {
                ...state,
                charactePlayerName: action.payload
            }
        case 'characteRaceChange':
            return {
                ...state,
                characteRace: action.payload
            }
        default:
            return state
    }
}

const [data, dispatch] = useReducer(reducer, characterObj)

const dispatchlist = {
    characterNameSet: (event: React.ChangeEvent) => dispatch({ type: 'characterNameChange', payload: event.target.value }),
    characterClassAndLevelSet: (event: React.ChangeEvent) => dispatch({ type: 'characterClassAndLevelChange', payload: event.target.value }),
    characterBackgroundlSet: (event: React.ChangeEvent) => dispatch({ type: 'characterBackgroundChange', payload: event.target.value }),
    characterPlayerNameSet: (event: React.ChangeEvent) => dispatch({ type: 'charactePlayerNameChange', payload: event.target.value }),
    characterRaceSet: (event: React.ChangeEvent) => dispatch({ type: 'characteRaceChange', payload: event.target.value }),
}

const characterSheetUseReduser = {
    data,
    dispatch,
    dispatchlist
}

export default characterSheetUseReduser