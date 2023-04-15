import { CharacterListFields } from "@component/store/defaultStore";
import { ActionType, PossibleAction } from "@component/store/reducer";

const updateCorrectFiledInStore = (
  state: CharacterListFields,
  { type, payload }: ActionType
) => ({
  ...state,
  [type.replace("Change", "")]: payload,
});

export default updateCorrectFiledInStore;
