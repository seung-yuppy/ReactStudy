// 요구사항:
// 1. localStorage와 동기화되는 상태를 관리하는 커스텀 훅을 만드세요
// 2. 새로고침해도 데이터가 유지되어야 합니다
// 3. 여러 컴포넌트에서 같은 키로 접근하면 데이터가 동기화되어야 합니다
// 4. JSON 형식의 데이터도 처리할 수 있어야 합니다

import { useEffect, useState } from "react";
import { useCreate } from "./AuthContext";

// parse : 서버나 API에서 받은 데이터를 처리하기 위해 사용, 자바스크립트 객체 or 배열
// stringfy : 서버 전송이나 데이터를 저장할 때 사용, json 형식의 문자열로 저장
function TodoApp() {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");
    const { creating, deleting } = useCreate();
    const [todos, setTodos] = useState([]); // 로컬 스토리지 값 가져오기

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }, [todo]);

    const createTodo = (e) => {
        e.preventDefault();
        if (creating(todo)) {
            setTodo("");
        } else {
            setError("todo만들기 실패");
        }
    };

    const deleteTodo = (id) => {
        if (deleting(id)) {
            setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
        } else {
            setError("todo지우기 실패");
        }
    };

    return (
        <>
            <form onSubmit={createTodo}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">등록</button>
                {error && <h1 style={{ color: 'red' }}>{error}</h1>}
            </form>
            <div>
                <h2>To Do List</h2>
                <ul>
                    {todos && todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.text}</span>
                            <button onClick={() => deleteTodo(todo.id)}>완료</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoApp;