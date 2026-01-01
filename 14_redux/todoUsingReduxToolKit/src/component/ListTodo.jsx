import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function ListTodo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos) //here todos is not the name but the array in the todoSlice
  return (
  <div className="max-w-md mx-auto mt-6 space-y-3">
  {
    todos.map((eachTodo) => (
      <div
        key={eachTodo.id}
        className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
      >
        <p className="text-gray-800 text-sm font-medium">
          {eachTodo.text}
        </p>

        <button
          onClick={() => dispatch(removeTodo(eachTodo.id))}
          className="text-red-500 text-sm font-semibold hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
    ))
  }
</div>

  )
}

export default ListTodo