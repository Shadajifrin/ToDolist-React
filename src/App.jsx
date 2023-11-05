import { useState } from 'react'
import './App.css'
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import {AiFillPlusCircle} from "react-icons/ai";
function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const addTodo = () => {
    if(todo !==''){
      setTodos([...todos, {list:todo,id:Date.now(),status:false}]);
      console.log(todos)
      setTodo('')
    }
  }
  const onDelete=(id)=>{
    setTodos( todos.filter((todo)=>todo.id !== id))
  }
  const onComplete=(id)=>{
    let complete=todos.map((list)=>{
      if(list.id===id)
      {
      return({...list,status:!list.status})
      }
      return list
    })
    setTodos(complete)
  }
  return (
    <div className="app" >
      <h1> Shada's ToDo List</h1>
      <form className='todo-input' onSubmit={handleSubmit}>
        <input type="text" value={todo} className='form-control' placeholder='Enter your todos' onChange={(e) => setTodo(e.target.value)} />
    
          <AiFillPlusCircle onClick={addTodo} color='green'/>
         
      </form>
      <div className="todos">
        <ul>
          {
            todos.map((todo) => (
              <li className='list-items'>
                <div className='lists' id={todo.status ? "list-item": ''}> {todo.list}</div>
                <span>
                  <IoMdDoneAll className="list-icons" id="complete" title='Complete' onClick={()=>onComplete(todo.id)}/>
                  <MdDelete className="list-icons" id="delete" title='Delete' onClick={()=>onDelete(todo.id)} />
                </span>

              </li>
            ))

          }


        </ul>
      </div>
    </div >
  );
}

export default App;