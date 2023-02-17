import React, { useEffect, useState } from 'react'
import Characters from './Characters.js'

function CharacterList({baseUrl, characters, setCharacters}) {
    
    const character = characters.map((character, index) => {
        return <Characters key={index} {...character} setCharacters={setCharacters} characters={characters} />
    })

    

    return (
        <div>
            {character}
        </div>
    )}

    export default CharacterList