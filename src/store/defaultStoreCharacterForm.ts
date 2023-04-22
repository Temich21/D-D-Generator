const defaultStoreCharacterForm = {
    characterName: '',
    level: '',
    class: 'random',
    race: 'random',
    background: 'random',
    alignment: 'random',
    bio: '',
}

export type CharacterFormFields = typeof defaultStoreCharacterForm;

export default defaultStoreCharacterForm;
