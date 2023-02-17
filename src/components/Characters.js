import React, { useEffect, useState } from 'react'


function Characters({ id, name, overall, vigor, attack, mana, faith, setCharacters, characters }) {
  
    const initialFormData = {
        vigor: vigor,
        attack: attack,
        mana: mana,
        faith: faith
    }

    const [editable, setEditable] = useState(false)
    const [formData, setFormData] = useState(initialFormData)


    function handleEdit(e){
        setEditable(!editable)
    }
   
    function handleDelete(e){
        const newList = characters.filter((character) => character.id !== id)
        fetch('http://localhost:9292/characters/' + `${id}`, {
            method: 'DELETE',
            })
            .then(setCharacters(newList))
    }

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdate(e) {
        setEditable(!editable)
        console.log(formData)
        
        
        fetch('http://localhost:9292/characters/' + `${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newChar => setCharacters(characters.map((character) => character.id === newChar.id ? newChar : character)))
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>Overall: <>{overall}</></p>
            <p>Vigor: {editable ? <input value={formData.vigor} name="vigor" onChange={handleFormChange}></input> : <>{formData.vigor}</>} </p>
            <p>Attack: {editable ? <input value={formData.attack} name="attack" onChange={handleFormChange}></input> : <>{formData.attack}</>}</p>
            <p>Mana: {editable ? <input value={formData.mana} name="mana" onChange={handleFormChange}></input> : <>{formData.mana}</>}</p>
            <p>Faith: {editable ? <input value={formData.faith} name="faith" onChange={handleFormChange}></input> : <>{formData.faith}</>}</p>
            { editable ?  <button onClick={handleUpdate}>Update</button> : <button onClick={handleEdit}>Edit</button>}
            { editable ? <></> : <button onClick={handleDelete} >Delete</button>}
        </div>
    )}

    export default Characters