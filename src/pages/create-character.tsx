import { useRef, useReducer, Reducer } from "react"
import { Header } from "../components/Header/Header"
import { Navigation } from "../components/Navigation/Navigation"
import { BurgerProvider } from "../components/Burger-nav/Burger-nav"
import { CharacterSheet } from "../components/Dnd-character-sheet/CharacterSheet"
import { ButtonElement } from "../components/ButtonElement/ButtonElement"
import { useReactToPrint } from "react-to-print"
import reducerCharacterSheet, { ActionTypeCharacterSheet } from "@component/store/reducerCharacterSheet"
import defaultStoreCharacterSheet, {
  CharacterListFields,
} from "@component/store/defaultStoreCharacterSheet"
import { createActions } from "@component/store/actionsCharacterSheet"

export default function CreateCharacter() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const [data, dispatch] = useReducer<Reducer<CharacterListFields, ActionTypeCharacterSheet>>(
    reducerCharacterSheet,
    defaultStoreCharacterSheet
  );
  const actions = createActions(data, dispatch);

  const handleClear = () => {
    dispatch({ type: "characterClear", payload: defaultStoreCharacterSheet });
  };

  return (
    <>
      <BurgerProvider>
        <Header>
          <ButtonElement name="Dowload" clickFuntion={handlePrint} />
          <ButtonElement name="Clear" clickFuntion={handleClear} />
        </Header>
        <Navigation />
        <CharacterSheet
          componentReference={componentRef}
          data={data}
          dispatch={actions}
        />
      </BurgerProvider>
    </>
  );
}
