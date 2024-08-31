import React, { useState } from "react";
import useTodo from "../Context/TodoContext";
export default function TodoForm() {
    const [todo,setTodo]=useState("")
  const {addTodo} = useTodo();
  const add = (e) => {
    e.preventDefault();
    addTodo({title:todo,completed:false})
    setTodo("");
  };
  return (
    <div> 
      <form onSubmit={add}>
        <div className=" w-[580px]">
          <input type="text" className="w-[500px] h-12 rounded-tl-2xl rounded-bl-2xl p-2 text-xl" placeholder="Add Your Todo" value={todo} onChange={(e)=>setTodo(e.target.value)} />
          <button className="bg-red-700 h-12 w-14 rounded-tr-2xl rounded-br-2xl text-center hover:bg-red-500 text-xl">Add</button>
        </div>
      </form>
    </div>
  );
}
