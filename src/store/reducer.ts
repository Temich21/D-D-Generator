import createModifierRepresentation from "@component/utils/createModifierRepresentation";
import updateCorrectFiledInStore from "@component/utils/updateCorrectFiledInStore";
import fieldsDefaults, { CharacterListFields } from "./defaultStore";

export enum PossibleAction {
  CharacterClear = "characterClear",
  CharacterNameChange = "characterNameChange",
  CharacterClassAndLevelChange = "characterClassAndLevelChange",
  CharacterBackgroundChange = "characterBackgroundChange",
  CharacterPlayerNameChange = "characterPlayerNameChange",
}

export type ActionType = {
  // TODO: Замени Выпили стринг ваще
  type: PossibleAction | string;
  payload: any;
};

const reducer = (
  state: CharacterListFields,
  action: ActionType
): CharacterListFields => {
  console.log("action: ", action);

  switch (action.type) {
    case PossibleAction.CharacterClear:
      return {
        ...fieldsDefaults,
      };
    case "characterStrengthChange":
      return {
        ...state,
        characterStrength: action.payload,
        characterStrengthmod: createModifierRepresentation(action.payload),
      };
    case "characterDexterityChange":
      return {
        ...state,
        characterDexterity: action.payload,
        characterDexteritymod: createModifierRepresentation(action.payload),
      };
    case "characterConstitutionChange":
      return {
        ...state,
        characterConstitution: action.payload,
        characterConstitutionmod: createModifierRepresentation(action.payload),
      };
    case "characterWisdomChange":
      return {
        ...state,
        characterWisdom: action.payload,
        characterWisdommod: createModifierRepresentation(action.payload),
      };
    case "characterIntelligenceChange":
      return {
        ...state,
        characterIntelligence: action.payload,
        characterIntelligencemod: createModifierRepresentation(action.payload),
      };
    case "characterCharismaChange":
      return {
        ...state,
        characterCharisma: action.payload,
        characterCharismamod: createModifierRepresentation(action.payload),
      };
    default:
      return updateCorrectFiledInStore(state, action);
  }
};

export default reducer;
