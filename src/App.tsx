import React from "react"
//import './App.css';
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

function App() {
  return <div className="App">
    <AppContainer >
      <Column text="To DO">
        <Card text="Generate App scaffold"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript"/>
      </Column>
      <Column text="Done">
        <Card text="Static typing"/>
      </Column>
    </AppContainer>
  </div>
}

export default App;
