import { CharacterListFields } from "@component/store/defaultStoreCharacterSheet";
import { ActionType } from "@component/store/reducerCharacterSheet";

const updateCorrectFiledInStore = (
  state: CharacterListFields,
  { type, payload }: ActionType
) => ({
  ...state,
  [type.replace("Change", "")]: payload,
});

export default updateCorrectFiledInStore;
