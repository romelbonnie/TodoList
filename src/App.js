// import logo from './logo.svg';
import { useState, useEffect } from "react";

import TodoItem from "./component/TodoItem";
import "./App.css";

const baseUrl = "http://localhost:5000";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const getTodos = () => {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const url = `${baseUrl}/todo`;
    console.log("URL: ", url);

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTodos(res.todos);
      });
  };

  const handleAddTodo = (title, description) => {
    if (todoTitle && todoTitle !== "") {
      const url = `${baseUrl}/todo/create`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          getTodos();
          alert("Todo has been created!");
        });
    }
  };

  const onSubmitAddTodo = (event) => {
    handleAddTodo(todoTitle, todoDesc);
    setTodoTitle("");
    setTodoDesc("");
    event.preventDefault();
  };

  const renderTodos = (list) => {
    console.log("TODO: ", list);
    return list && list.length > 0 ? (
      <>
        {list.map((todo) => (
          <TodoItem key={todo._id} data={todo} />
        ))}
      </>
    ) : (
      <p>No todo remaining</p>
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1 className="title">TODO List</h1>
      <div className="container">
        <form className="addForm" onSubmit={onSubmitAddTodo}>
          <span className="inputLabel">Title:</span>
          <input
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <span className="inputLabel">Description:</span>
          <input
            value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
          <input type="submit" className="addBtn" value="Add Todo" />
        </form>
        {renderTodos(todos)}
      </div>
    </div>
  );
}

export default App;
