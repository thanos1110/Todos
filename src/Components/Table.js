import React from 'react'
import './Table.css'
function Table({ todo, onDelete }) {
    return (
        <>
            <tr >
                <td>{todo.sno}</td>
                <td>{todo.title}</td>
                <td>{todo.desc}</td>
                <td><button style={{ backgroundColor: 'red' }} onClick={() => onDelete(todo)}>Delete</button></td>
            </tr>
        </>
    )
}

export default Table
