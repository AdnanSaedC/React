import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice.js'

function AddTodo() {
    // useDispatch uses reducres to make changes in the store
    // here store and reducers are part of core reducer and useDispatch is part of react reducer

    // so react reducer reduced ur work on making recat talk to core reducer library
    const dispath = useDispatch()
    const [input,setInput] = React.useState('')
    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispath(addTodo(input))
        setInput('')
    }
    return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6">
  <input
    type="text"
    className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    placeholder="Enter a todo"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />

  <button
    type="submit"
    className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-600 transition"
  >
    Add
  </button>
</form>

  )
  
}

export default AddTodo