import React, { useState } from 'react'
import { useTodoContext } from '../context'

//the entire thingis we are creating a component here which will get some parameter from app.jsx  and the same component will be used to display each todo

// todo1-copy of this component
// todo2-copy of this component

function TodoItem({todo}) {


    //we are getting the entire todo
    //those curly braces are neccessary to extrcat the exact same thing

    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todoMessage)

    let {updateTodo,deleteTodo,toggleTodo} = useTodoContext()

    const editTodo = ()=>{
        if(!todo.completed) return
        updateTodo(todo.id,todoMsg)
        setIsTodoEditable(false)
    }

    const toggle = ()=>{
        toggleTodo(todo.id)
    }

    const deleteIt =()=>{
        deleteTodo(todo.id)
    }
    console.log("todo which we got")
    console.log(todo)
    console.log(todo.todoMessage)

    return (
  <div className={`${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} p-3 rounded-md flex items-center gap-3 shadow-sm transition-colors`}>
    <input
      type="checkbox"
      onChange={toggle}
      checked={todo.completed}
      className="cursor-pointer h-5 w-5 accent-green-600"
    />
    <input
      type="text"
      readOnly={!isTodoEditable}
      value={todoMsg}
      onChange={(e) => setTodoMsg(e.target.value)}
      className={`${isTodoEditable ? "border border-black/10 px-2 py-1" : "border-transparent px-2 py-1"} flex-1 rounded-md outline-none`}
    />
    <button
      onClick={() => {
        if (todo.completed) return;
        if (isTodoEditable) {
          editTodo();
          //after editing changing its state
          setIsTodoEditable((prev) => !prev);
        } else {
          // first time when you click this 
          //editable states changes and ui get rendered the effect is seen in the input box and at the time of saving if condition gets executed and things gets saved
          setIsTodoEditable((prev) => !prev);
        }
      }}
      disabled={todo.completed}
      className={`px-3 py-1 rounded-md text-sm font-medium ${
        todo.completed
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : isTodoEditable
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-yellow-400 text-black hover:bg-yellow-500"
      }`}
    >
      {isTodoEditable ? "save" : "edit"}
    </button>
    <button onClick={() => deleteIt()} className="px-3 py-1 rounded-md text-sm bg-red-500 text-white hover:bg-red-600">
      Delete
    </button>
  </div>
)

}

export default TodoItem