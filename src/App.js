import './App.css';
import Header from './Components/Header';
import Left from './Components/Left';
import Right from './Components/Right';
import Footer from './Components/Footer';
import React, { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([])
  const onDelete = (todo) => {
    console.log("OnDelete Called of ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Header title='Todos' search={false} />
      <Left todos={todos} onDelete={onDelete} />
      <Right addTodo={addTodo} />
      <Footer />
    </div>
  );
}

export default App;
