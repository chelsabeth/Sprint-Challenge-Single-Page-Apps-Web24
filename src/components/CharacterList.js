import React, { useEffect, useState } from "react";
import axios from "axios"; 
import CharacterCard from "./CharacterCard";
import { Container, Row, Col} from "reactstrap";


const CharacterList = () => {
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
          console.log("Character Data", response.data.results);
          setList(list);
        })
        .catch(error => {
          console.log("Sorry, an error has occured", error);
        });
    };
    recieveList();
  }, []);

  return (
    <div className="character-list">
      <Container>
      <Row>
      <Col>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {list.map(character => {
        return (
          <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          />
        )
      })}
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default CharacterList;
