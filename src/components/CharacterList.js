import React, { useEffect, useState } from "react";
import axios from "axios"; 


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);
  useEffect(() => {
     // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const recieveList = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/") 
        .then(response => {
          const list = response.data.results;
          console.log("Character Data", response);
          setList(list);
        })
        .catch(error => {
          console.log("Sorry, an error has occured", err);
        });
    };
    recieveList();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {list.map(character => {
        return (

        )
      })}
    </section>
  );
}

export default CharacterList;
