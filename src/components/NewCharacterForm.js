import React, {  useState } from 'react'

function NewCharacterForm({  characters, setCharacters, parties }) {
    
    
    
    const initialFormData = {
        name: '',
        vigor: '',
        attack: '',
        mana: '',
        faith: '',
        party_id: ''
    }
    
    const [formData, setFormData] = useState(initialFormData)

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    

    function onFormSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/characters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(newChar => setCharacters([...characters, newChar]))
            setFormData(initialFormData)
    }
    
    const partyList = parties.map((party, index) => {
            return <option key={index} value={party.id}>{party.name}</option>
    })

    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <h1>New Character</h1>
                <p>Name: <input name='name' value={formData.name} onChange={handleFormChange} placeholder="Name"></input></p>
                <p>Vigor: <input name='vigor' value={formData.vigor} onChange={handleFormChange} placeholder="Vigor"></input></p>
                <p>Attack: <input name='attack' value={formData.attack} onChange={handleFormChange} placeholder="Attack"></input></p>
                <p>Mana: <input name='mana' value={formData.mana} onChange={handleFormChange} placeholder="Mana"></input></p>
                <p>Faith: <input name='faith' value={formData.faith} onChange={handleFormChange} placeholder="Faith"></input></p>
                <select name='party_id' id='partyList' onChange={handleFormChange}>
                    <option>Choose Party</option>
                    {partyList}
                </select>
                <button type='submit'>Create Character</button>
            </form>
        </div>
)}

export default NewCharacterForm