import ReactDOM from "react-dom";
import React, { useReducer } from "react";
import MessageBoard from "./components/MessageBoard";
import PublishMessage from "./components/PublishMessage";
import {reducer , initialState } from "./state/reducer";
import {Display} from './components/Display'
import './styles.css'

export const MyContext = React.createContext('');

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={state.messages}>
    <div>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
      <Display/>
    </div>
    </MyContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
