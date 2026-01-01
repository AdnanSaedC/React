import { useState } from 'react'
import './App.css'
import { AddTodo, ListTodo } from './component'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="w-full max-w-lg bg-gray-950 rounded-xl shadow-lg p-6">
          <AddTodo />
          <ListTodo />
        </div>
      </div>

    </Provider>
  )
}

export default App
