// here we used slice becuase reducers in redux toolkit is called slice
// before coming here read store.js comments from app/store.js

//reducers are th functuions which will be used to chage the value of the variables


//initails state contains propertis(here value is simply a value) and funtions(here value is a function)

// every reducer takes two things state and action
// state is current state of the varible 
//and action is nothing the paarmeter you pass to the function

import {createSlice ,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[
        {
            id:nanoid(),
            text:"Hello world"
        }
    ]
}

export const todoSlice = createSlice({
    name:"todo", //this is the name of the slice which you want to create
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo = {
                id:nanoid(),
                text:action.payload //here it will contain the data you send in the parameter
            }
            state.todos.push(newTodo) //here todos we got from initial state
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(
                (eachTodo)=> eachTodo.id !== action.payload
            )
        }
    }
})


export const {addTodo,removeTodo} = todoSlice.actions
// we are extrcating these from todoSlice.actions and exporting to be used in order to change the values 

export default  todoSlice.reducer
//this will be used by the store to change values in the db