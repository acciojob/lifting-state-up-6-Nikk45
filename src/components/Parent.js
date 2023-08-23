import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    const [todos,setTodos] = useState(()=>{
        return [{id:crypto.randomUUID(), content:'Learn React', status: "incomplete"},
        {id:crypto.randomUUID(), content:'Build a React app', status: "incomplete"},
        {id:crypto.randomUUID(), content:'Deploy the React app', status: "incomplete"}]
    })

    return(
        <>
        <h1>Parent Component</h1>
        <Child todos={todos} setTodos={setTodos} />
        </>
    )
}

export default Parent