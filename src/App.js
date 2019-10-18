import React, {useState} from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

export default function App() {

  const [filter, setFilter] = useState("");

  const filterChange = event => {
    event.preventDefault();
    setFilter(event.target.value);
  }
  
  return (
    <main>
      <Header />
      {/* <CharacterList /> */}
      <input name="filter" value={filter} onChange={filterChange}></input>
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" cardList={CharacterList} filter={filter}/>
    </main>
  );
}
