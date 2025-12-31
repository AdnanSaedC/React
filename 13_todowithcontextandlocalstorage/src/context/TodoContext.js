import { createContext,useContext } from "react";

 export const todoContext = createContext(
    {
        todo:[
            {
                id:1,
                todoMessage:"todo content",
                completed : false
            }
        ],
        craeteTodo:(todoMessage)=>{},
        updateTodo:(id,todoMessage)=>{},
        deleteTodo:(id)=>{},
        toggleTodo:(id)=>{},
    }
)

export const TodoContextProvider = todoContext.Provider

export const useTodoContext = () => {
   return  useContext(todoContext) 
}