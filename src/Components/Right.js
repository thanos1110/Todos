import React, { useState } from 'react'
import './Right.css'
function Right(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const Submit = (e) => {
        // alert('Submitted')
        e.preventDefault();
        props.addTodo(title, desc);
    }
    return (
        <div id='Right'>
            <h2>Input</h2>
            <form onSubmit={Submit}>
                <label htmlFor="title">Task:</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => { setTitle(e.target.value) }} required />
                <br />
                <label htmlFor="desc">Description:</label>
                <input type="text" name="desc" id="desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} required />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Right
