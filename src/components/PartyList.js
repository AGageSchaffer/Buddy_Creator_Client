import Party from "./Party"

function PartyList({parties, characters, setCharacters }){

    const partyList = parties.map((party, index) => {
    return <Party key={index} partyName={party.name} characters={characters} partyId={party.id} setCharacters={setCharacters} />
    })


    return(
        <div>
            {partyList}
        </div>
    )
}

export default PartyList