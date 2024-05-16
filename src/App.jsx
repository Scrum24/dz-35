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

  function getTodoTasks() {
    return todoList.filter((task) => task.isDone === false);
  }

  function getDoneTasks() {
    return todoList.filter((task) => task.isDone === true);
  }

  return (
    <div className="app">
      <div className="content">
        <div className="todo">
          <h3>To-Do List. All tasks</h3>
          <ToDoList
            tdList={todoList}
            updateIsDone={(id) => updateIsDone(id)}
            deleteTask={(id) => deleteTask(id)}
          />
        </div>

        <div className="todo-tasks">
          <h3>To-Do tasks</h3>
          <ToDoList
            tdList={getTodoTasks()}
            updateIsDone={(id) => updateIsDone(id)}
            deleteTask={(id) => deleteTask(id)}
          />
        </div>

        <div className="done-tasks">
          <h3>Done tasks</h3>
          <ToDoList
            tdList={getDoneTasks()}
            updateIsDone={(id) => updateIsDone(id)}
            deleteTask={(id) => deleteTask(id)}
          />
        </div>
      </div>

      <div className="aside">
        <h3>Add new task</h3>
        <Form onSubmit={(el) => addTask(el)} />
      </div>
    </div>
  );
}

export default App;
