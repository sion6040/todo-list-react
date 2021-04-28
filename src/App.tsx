import React from 'react';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
let idnum: number = 3;
const TASK_TYPE = {
  WORK: 'WORK',
  LEARN: 'LEARN',
  OTHER: 'OTHER',
};

export function App() {
  const [idnum, setId] = useState(3);
  const [todolist, setTodolist] = useState<{ id: number; task: string; type: string }[]>([
    { id: 1, task: '書類を作る', type: TASK_TYPE.WORK },
    { id: 2, task: '本を読む', type: TASK_TYPE.LEARN },
    { id: 3, task: '掃除をする', type: TASK_TYPE.OTHER },
  ]);
  const handleDone = (id: number) => {
    setTodolist(todolist.filter((todo) => todo.id !== id));
  };
  const [Switch, setSwitch] = useState(false);
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
    if (Switch === false) {
      setSwitch(true);
    } else {
      setSwitch(false);
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
  const changeTask = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newtodolist = todolist.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: event.target.value };
      } else {
        return todo;
      }
    });
    setTodolist(newtodolist);
  };
  return (
    <div>
      <Body>
        <div className="switch">
          <input type="checkbox" id="toggle" className="toggle" onClick={() => onoff()} />
          {Switch ? 'on' : 'off'}
          <label htmlFor="toggle"></label>
        </div>
        {todolist.map((todo) => (
          <TaskList key={todo.id}>
            {Switch ? (
              <Select value={todo.type} onChange={(event) => changeType(event, todo.id)}>
                {Object.values(TASK_TYPE).map((tasktype) => (
                  <option key={tasktype} value={tasktype}>
                    {tasktype}
                  </option>
                ))}
              </Select>
            ) : (
              <DivType>{todo.type}</DivType>
            )}
            {Switch ? (
              <Input value={todo.task} onChange={(event) => changeTask(event, todo.id)}></Input>
            ) : (
              <DivTask>{todo.task}</DivTask>
            )}
            <DoneDiv>
              <button className="done-button" onClick={() => handleDone(todo.id)} key={todo.id}>
                完了
              </button>
            </DoneDiv>
          </TaskList>
        ))}
        <CreateTask>
          <button className="create-task" onClick={() => createTask()}>
            タスクを追加
          </button>
        </CreateTask>
      </Body>
    </div>
  );
}
const Body = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -250px;
`;
const TaskList = styled.div`
  display: flex;
  background: #ccc;
  padding: 20px 30px 20px 10px;
  border: 2px solid black;
  border-radius: 16px;
  width: 550px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 1100px;
`;
const DivTask = styled.div`
  width: 1100px;
`;
const DoneDiv = styled.div`
  width: 100%;
  text-align: right;
  .done-button {
    width: 90px;
  }
`;
const Select = styled.select`
  width: 150px;
  margin-right: 30px;
  margin-left: 15px;
  margin-top: 3px;
`;
const DivType = styled.div`
  width: 150px;
  margin-right: 30px;
  margin-left: 15px;
  margin-top: 3px;
`;
const CreateTask = styled.div`
  align: center;
  .create-task {
    width: 120px;
    height: 50px;
    margin-bottom: 400px;
  }
`;
