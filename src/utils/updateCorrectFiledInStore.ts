import { CharacterListFields } from "@component/store/defaultStore";
import { PossibleAction } from "@component/store/reducer";

const updateCorrectFiledInStore = (
  state: CharacterListFields,
  actionType: PossibleAction | string,
  payload: any
) => ({
  ...state,
  [actionType.replace("Change", "")]: payload,
});

export default updateCorrectFiledInStore;
