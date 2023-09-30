import React from 'react'
import './Left.css'
import Table from './Table'
function Left(props) {
    return (
        <div id='Left'>
            <h2 style={{ color: 'yellow' }}>Output</h2>
            <div style={{ margin: '2%' }}>
                <table >

                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.length === 0 ? <><h2 style={{ color: 'white' }}>No Todos to Display</h2> </> :
                            props.todos.map((todo) => {
                                return <Table todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            })
                        }
                    </tbody>
                </table>
            </div >
        </div>
    )
}
export default Left
