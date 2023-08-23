import React from "react";

const Child = ({ todos, setTodos }) => {
  console.log("list of items", todos);

  const changeState = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.status = "completed";
        return setTodos(todos);
      }
    });
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
              <button
                onClick={(e) => {
                  changeState(todo.id);
                  {
                    e.target.style.visibility = 'hidden'
                  }
                }}
              >
                Complete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Child;
