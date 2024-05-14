import React, {useState} from "react";
import Form from "./components/form/Form";
import ToDoList from "./components/todolist/ToDoList";
import {tdList} from "./data";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState(tdList);

  function addTask(el) {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: el.title,
        description: el.description,
        isDone: false,
      },
    ]);
  }

  function deleteTask(id) {
    const listWitoutTask = todoList.filter((el) => el.id !== id);
    setTodoList(listWitoutTask);
  }

  function updateIsDone(id) {
    const i = todoList.findIndex((el) => el.id === id);
    todoList[i].isDone = !todoList[i].isDone;
    setTodoList([...todoList]);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="content">
        <div className="todo">
          <ToDoList
            tdList={todoList}
            updateIsDone={(id) => updateIsDone(id)}
            deleteTask={(id) => deleteTask(id)}
          />
        </div>

        <div className="aside">
          <Form onSubmit={(el) => addTask(el)} />
        </div>
      </div>
    </div>
  );
}

export default App;
