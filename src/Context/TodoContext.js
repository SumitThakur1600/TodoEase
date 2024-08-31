import React, { createContext, useContext } from "react";
export const TodoContext=createContext(
    {
        todos:[
            {
                id:1,
                title:"First Todos",
                completed:false
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(todo,id)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}
    }
);
 
export const TodoContextProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}