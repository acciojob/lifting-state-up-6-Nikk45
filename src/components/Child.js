import React from "react";

const Child = ({ todos, setTodos }) => {
  console.log("list of items", todos);

  const changeState = (id,e) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.status = "completed";
        e.target.style.visibility = 'hidden'
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
                  changeState(todo.id ,e);
                //   {
                //     e.target.style.visibility = 'hidden'
                //   }
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
