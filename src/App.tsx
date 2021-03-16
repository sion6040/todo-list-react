import React from 'react';
import './App.css';
import {useState} from "react";
//divタグをインラインにしているため、widthの指定ができずに、完了ﾎﾞﾀﾝがずれてしまう。
let idnum:number=3; //length+1だとIdがかぶってしまって、識別方法が分からなかったため使用
export function App() {
  const [todolist,setTodolist]=useState([
  {id:1,task:"書類を作る",type:"WORK"},
  {id:2,task:"本を読む",type:"LEARN"},
  {id:3,task:"掃除をする",type:"OTHER"},
  ]);
  const handleRemoveItem = (e:number)=> {
    setTodolist(todolist.filter(todo => todo.id !== e));
  };
  const createTask=()=>{
    idnum++;
    setTodolist(todolist.concat({
      id:idnum,task:"NEW TASK",type:"WORK"
    }));
  }
  return (
    <div >
      <div className="body">
    {todolist.map((todo)=>(
      <div className="tasklist">
        <div style={{margin:"10px",display:"inline"}}>{todo.type}</div>
        <div style={{margin:"10px",display:"inline"}}>{todo.task}</div>
        <div style={{padding:"0 0 0 250px",display:"inline"}}><button style={{width:"90px"}} onClick={()=>handleRemoveItem(todo.id)} key={todo.id}>完了</button></div>
      </div>
    ))}
    <div className="createTask">
      <button style={{width:"100px",height:"50px",marginBottom:"400px"}} onClick={()=>createTask()}>タスクを追加</button>
    </div>
      </div>
    </div>
  );
}

