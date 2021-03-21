import React from 'react';
import './App.css';
import { useState } from 'react';
//divタグをインラインにしているため、widthの指定ができずに、完了ﾎﾞﾀﾝがずれてしまう。
let idnum: number = 3;

const TASK_TYPE = {
  WORK: 'WORK',
  LEARN: 'LEARN',
  OTHER: 'OTHER',
};

export function App() {
  const [todolist, setTodolist] = useState<{ id: number; task: string; type: string }[]>([
    { id: 1, task: '書類を作る', type: TASK_TYPE.WORK },
    { id: 2, task: '本を読む', type: TASK_TYPE.LEARN },
    { id: 3, task: '掃除をする', type: TASK_TYPE.OTHER },
  ]);
  const handleRemoveItem = (e: number) => {
    setTodolist(todolist.filter((todo) => todo.id !== e));
  };
  const [st, setSt] = useState(false);
  const createTask = () => {
    idnum++;
    setTodolist(
      todolist.concat({
        id: idnum,
        task: 'NEW TASK',
        type: TASK_TYPE.WORK,
      }),
    );
  };
  const onoff = () => {
    if (st === false) {
      setSt(true);
    } else {
      setSt(false);
    }
  };
  const changeType = (event: React.ChangeEvent<HTMLSelectElement>, id: number) => {
    const newtodolist = todolist.map((todo) => {
      if (todo.id === id) {
        return { ...todo, type: event.target.value };
      } else {
        return todo;
      }
    });
    setTodolist(newtodolist);
  };
  return (
    <div>
      <div className="body">
        <div className="switch">
          <input type="checkbox" id="toggle" className="toggle" onClick={() => onoff()} />
          {st ? 'on' : 'off'}
          <label htmlFor="toggle"></label>
        </div>
        {todolist.map((todo) => (
          <div key={todo.id} className="tasklist">
            {st ? (
              <select value={todo.type} onChange={(event) => changeType(event, todo.id)}>
                {Object.values(TASK_TYPE).map((tasktype) => (
                  <option key={tasktype} value={tasktype}>
                    {tasktype}
                  </option>
                ))}
              </select>
            ) : (
              <div style={{ margin: '10px', display: 'inline' }}>{todo.type}</div>
            )}
            <div style={{ margin: '10px', display: 'inline' }}>{todo.task}</div>
            <div style={{ padding: '0 0 0 250px', display: 'inline' }}>
              <button style={{ width: '90px' }} onClick={() => handleRemoveItem(todo.id)} key={todo.id}>
                完了
              </button>
            </div>
          </div>
        ))}
        <div className="createTask">
          <button style={{ width: '100px', height: '50px', marginBottom: '400px' }} onClick={() => createTask()}>
            タスクを追加
          </button>
        </div>
      </div>
    </div>
  );
}
