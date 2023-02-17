import Characters from "./Characters"


function Party({partyName, characters, partyId, setCharacters}){

    const filteredCharacters = characters.filter((char) => {
        return char.partyId.includes(partyId)
    })
    const character = filteredCharacters.map((character, index) => {
        return <Characters key={index} {...character} setCharacters={setCharacters} characters={characters} />
    })

    const partyOverall = filteredCharacters.reduce(function(prev, current) {
        return prev + +current.overall
      }, 0)
    
    return(
        <div>
            <h1>{partyName}</h1>
            <h3>Party Overall: {partyOverall}</h3>
            {character}
        </div>
    )
}

export default Party