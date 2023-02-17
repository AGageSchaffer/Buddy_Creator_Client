import React, { useState } from 'react'

function NewPartyForm({parties, setParties}) {
    
    const initialFormData = {
        name: ''
    }
    const [formData, setFormData] = useState(initialFormData)

    function onChange(e){
        setFormData({
            ...formData,
            name: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/parties', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(newParty => setParties([...parties, newParty]))
            
    }

    return(
        <div>
            <h1>New Party</h1>
            <form onSubmit={onSubmit}>
                <p>Party Name: <input value={formData.name} onChange={onChange}></input></p>
                <button type='submit'>Create Party</button>
            </form>
        </div>
    )
}

export default NewPartyForm