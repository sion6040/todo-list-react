import React from 'react';
import './App.css';
import {useState} from "react";


export function App() {
  const [todolist,setTodolist]=useState([
  {id:1,task:"書類を作る",type:"WORK"},
  {id:2,task:"本を読む",type:"LEARN"},
  {id:3,task:"掃除をする",type:"OTHER"},
  ]);
  const handleRemoveItem = (e:number)=> {
    setTodolist(todolist.filter(todo => todo.id !== e));
  };
  return (
    <div >
      <div className="body">
    {todolist.map((todo)=>(
      <div className="tasklist">
        <p>{todo.type}　{todo.task}</p>
        <button onClick={()=>handleRemoveItem(todo.id)} key={todo.id}>完了</button>
      </div>
    ))}
      </div>
    </div>
  );
}

