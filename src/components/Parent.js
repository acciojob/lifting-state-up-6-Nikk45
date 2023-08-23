import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    const [todos,setTodos] = useState(()=>{
        return [{id:crypto.randomUUID(), content:'Learn React', completed: false },
        {id:crypto.randomUUID(), content:'Build a React app', completed: false },
        {id:crypto.randomUUID(), content:'Deploy the React app', completed: false }]
    })

    return(
        <>
        <h1>Parent Component</h1>
        <Child todos={todos} setTodos={setTodos} />
        </>
    )
}

export default Parent