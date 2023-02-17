import './App.css';
import CharacterList from './components/CharacterList'
import NewCharacterForm from './components/NewCharacterForm';
import React, { useEffect, useState } from 'react'
import PartyList from './components/PartyList';
import NewPartyForm from './components/NewPartyForm';

function App() {

  const baseUrl = "http://localhost:9292/char_with_stats"
  const [characters, setCharacters] = useState([])
  const partyUrl = "http://localhost:9292/parties"
  const [parties, setParties] = useState([])


    useEffect(() => {
    fetch(baseUrl)
        .then(res => res.json()) 
        .then(characters => {setCharacters(characters)
        })
    }, [])

    useEffect(() => {
        fetch(partyUrl)
        .then(res => res.json()) 
        .then(partyArr => setParties(partyArr))
        
    }, [])

  return (
    <div className="App">
      <PartyList parties={parties} characters={characters} setCharacters={setCharacters} />
      {/* <CharacterList baseUrl={baseUrl} characters={characters} setCharacters={setCharacters} /> */}
      <NewCharacterForm baseUrl={baseUrl} characters={characters} setCharacters={setCharacters} parties={parties} />
      <NewPartyForm parties={parties} setParties={setParties} />
    </div>
  );
}

export default App;
