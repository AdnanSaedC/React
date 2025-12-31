import { useEffect, useState } from 'react'
import './App.css'
import {TodoContextProvider} from './context/index.js'
import {Todoform,TodoItem} from "./components/index.js"


function App() {

  const [todo,setTodo] = useState([])

  const craeteTodo = (todoMessage)=>{
        
        // we want to add the todo in the first place then remaining todos
        setTodo(
          (prevTodos) => [
           { id: Date.now(),
            todoMessage,
            completed:false
           }
            ,...prevTodos] //.prevTodo all the values of that array will be placed
        )
        
  }

  //here we have taken the approcah that you will pass updated message
  const updateTodo =(id,todoMessage)=>{
    setTodo(
      (prevTodos)=>(prevTodos.map(
          (eachTodo) => (eachTodo.id === id) ? {...eachTodo, todoMessage: todoMessage }: eachTodo
                                          //how this ...obj spreding works is we are sprding the obj and we are updating a field in that objects(which is completed here)

        )
      )
    )
  }

  const deleteTodo = (id)=>{
    setTodo(
      (prevTodos)=> prevTodos.filter(
        (eachTodo)=> eachTodo.id !== id //what is does is it will take return a new array and the values will match the condition given here in our case all the todo whose id is different from the given id
      )
    )
  }

  const toggleTodo = (id)=>{
    setTodo(
      (prevTodos) => prevTodos.map(
        (eachTodo)=> eachTodo.id === id ? {...eachTodo,completed : !eachTodo.completed} : eachTodo
                                          //how this ...obj spreding works is we are sprding the obj and we are updating a field in that objects(which is completed here)
      )
    )
  }

  //now it time to save the todo in the local storage
  
  //now to get the item as soon as page load
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodo(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo)) //since local storage only accepts string values
  },[todo])


  return (
  <TodoContextProvider
    value={{
      todo,
      craeteTodo,
      updateTodo,
      deleteTodo,
      toggleTodo,
    }}
  >
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Todo App
      </h1>

      <div className="w-full max-w-md mb-6">
        <Todoform />
      </div>

      <div className="w-full max-w-md flex flex-col gap-3">
        {todo.map((eachTodo) => (
          <div key={eachTodo.id}>
            <TodoItem todo={eachTodo} />
          </div>
        ))}
      </div>
    </div>
  </TodoContextProvider>
)

}

export default App
