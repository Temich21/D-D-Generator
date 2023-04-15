import Head from "next/head";
import { useRef, useReducer, ReducerWithoutAction, Reducer } from "react";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { BurgerProvider } from "../components/Burger-nav/Burger-nav";
import { CharacterSheet } from "../components/Dnd-character-sheet/CharacterSheet";
import { ButtonElement } from "../components/ButtonElement/ButtonElement";
import { useReactToPrint } from "react-to-print";
import reducer, { ActionType } from "@component/store/reducer";
import defaultStore, {
  CharacterListFields,
} from "@component/store/defaultStore";
import { createActions } from "@component/store/actions";

export default function Home() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const [data, dispatch] = useReducer<Reducer<CharacterListFields, ActionType>>(
    reducer,
    defaultStore
  );
  const actions = createActions(data, dispatch);

  const handleClear = () => {
    dispatch({ type: "characterClear", payload: defaultStore });
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
