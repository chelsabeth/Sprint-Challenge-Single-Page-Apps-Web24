import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App() {

  
  return (
    <main>
      <Header />
      {/* <CharacterList filter={filter}/> */}
      {/* <input name="filter" value={filter} onChange={filterChange}></input> */}
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" charList={<CharacterList/>}/>
    </main>
  )
}
