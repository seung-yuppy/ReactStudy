import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setFilter } from "./todoSlice";

function TodoList() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();     // reducers가 useDispatch로 온다
    const { items, filter } = useSelector((state) => state.todos);  // initialState가 useSelector로 온다

    // 할 일 필터링
    const filteredTodos = items.filter((item) => {
        if (filter === "completed") {
            return item.completed
        }
        if (filter === "active") {
            return !item.completed
        }
        return true;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {    // trim : 양끝 공백 제거
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    {/* <form onSubmit={() => dispatch(addTodo(newTodo))}> */}
                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="새로운 할 일 추가" />
                    <button type="submit">추가하기</button>
                </form>

                <div>
                    <button onClick={() => dispatch(setFilter('all'))}>All</button>
                    <button onClick={() => dispatch(setFilter('active'))}>Active</button>
                    <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
                </div>

                <ul>
                    {filteredTodos && filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.content}
                            </span>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;