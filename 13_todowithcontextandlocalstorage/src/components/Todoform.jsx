import React, { useState } from 'react'
import { useTodoContext } from '../context'


// this component is used to create Todo's
function Todoform() {
    const [newTodo,setNewTodo] = useState("")

    const {craeteTodo} = useTodoContext()


    const addNewTodoToTodoList = (e)=>{
        e.preventDefault()
        if(!newTodo) return
        console.log(newTodo)
        craeteTodo(newTodo)
        setNewTodo("")
    }
  return (
   <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <form className="flex gap-3">
      <input
        type="text"
        placeholder="Enter a todo"
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={addNewTodoToTodoList}
      >
        Add Todo
      </button>
    </form>
  </div>
  )
}

export default Todoform