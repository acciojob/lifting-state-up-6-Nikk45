import React from "react";

const Child = ({ todos, setTodos }) => {
  console.log("list of items", todos);

  const changeState = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? {...todo,completed:true} : todo
    })
    setTodos(newTodos)
    console.log("after changingitems", todos);
  };

  return (
    <>
      <ul>
        <h1>Child Component</h1>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.content}{" "}
              {
                !todo.completed && <button onClick={() => changeState(todo.id)}>Complete</button>
              }
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Child;
