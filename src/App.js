import './App.css';
import Header from './Components/Header';
import Left from './Components/Left';
import Right from './Components/Right';
import Footer from './Components/Footer';
import React, { useState } from 'react';
import { useEffect } from 'react';
function App() {
  let initTodo;
  if (localStorage.getItem === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log("OnDelete Called of ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
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
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <div className="App">
      <h1>HelloTodo</h1>
      <Header title='Todos' search={false} />
      <Left todos={todos} onDelete={onDelete} />
      <Right addTodo={addTodo} />
      <Footer />
    </div>
  );
}

export default App;
