import React from "react";
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("Test");
    return (
        <>
            <h1>할일 목록</h1>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default memo(Todos);