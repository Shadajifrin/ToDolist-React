import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  return (
    <div className="app" >
      <header>
        <h1> Shada's ToDo List</h1>
      </header>
      <div className="todo-input">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      </div>
      <button className="todo-button" type="submit">
        <i onClick={() => setTodos([...todos, todo])} className="fa fa-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="todos">
        {todos.map((value) => {
          return (<div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>{value}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>)
        })}
      </div>
    </div >
  );
}

export default App;