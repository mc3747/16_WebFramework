import React, { Component } from 'react'
const { useState } = React
const UseState = () => {
    const [input, setValue] = useState("");
    const [name, setName] = useState('Chris');
    const handleInput = (event) => {
        setValue(event.target.value);
    }
    const updateName = (event) => {
        event.preventDefault();
        setName(input);
        setValue("");
    }

    return (
        <div className="box">
            <h1>
                Hello, <span>{name}!</span>
            </h1>
            <form className="form">
                <div class="field">
                    <label for="name-1">Update Name</label>
                    <div class="control">
                        <input type="text" value={input} name="name-1" onChange={handleInput} class="input" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button onClick={updateName} class="button is-dark">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default UseState