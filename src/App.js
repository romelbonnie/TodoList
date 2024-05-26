// import logo from './logo.svg';
import { useState, useEffect } from "react";

import TodoItem from "./component/TodoItem";
import "./App.css";

const baseUrl = "http://localhost:5000";

function App() {
  const [todos, setTodos] = useState([]);

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
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="title">TODO List</h1>
      <div className="container">{renderTodos(todos)}</div>
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
