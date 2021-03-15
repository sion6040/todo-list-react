import React from 'react';
import './App.css';
import {useState} from "react";


export function App() {
  const [todolist,setTodolist]=useState([
  {id:1,task:"書類を作る",type:"WORK"},
  {id:2,task:"本を読む",type:"LEARN"},
  {id:3,task:"掃除をする",type:"OTHER"},
  ]);
  const handleRemoveItem = (e:any)=> {
    const name = e.target.getAttribute("key")
    setTodolist(todolist.filter(todo => todo.id !== name));
    console.log("aa");//ここでつんだ。
  };
  return (
    <div >
      <div className="body">
    {todolist.map((todo)=>(
      <div className="tasklist">
        <p>{todo.type}　{todo.task}</p>
        <button onClick={handleRemoveItem} key={todo.id}>完了</button>
      </div>
    ))}
      </div>
    </div>
  );
}

