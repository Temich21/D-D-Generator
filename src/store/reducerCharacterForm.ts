import defaultStoreCharactetForm, {
    CharacterFormFields,
} from "@component/store/defaultStoreCharacterForm";

export type ActionTypeCharacterForm = {
    type: string
    payload: string | object
};

const reducer = (state: any, action: ActionTypeCharacterForm) => {
    switch (action.type) {
        case 'clearForm':
            return {
                ...defaultStoreCharactetForm
            }
        case 'characterNameChange':
            return {
                ...state,
                characterName: action.payload
            }
        case 'levelChange':
            return {
                ...state,
                level: action.payload
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

export default reducer;