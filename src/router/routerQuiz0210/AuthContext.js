import { createContext, useContext } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const creating = (todo) => {
        if (todo) {
            // localstorage에 todos를 가져오고 없으면 빈배열 만든다
            const todos = JSON.parse(localStorage.getItem('todos')) || [];
            // id를 줘서 각 todo의 완료버튼을 누르면 삭제하기 위해 설정함
            const newTodo = { id: Date.now(), text: todo }
            todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(todos));
            return true;
        } else {
            return false;
        }
    };

    const deleting = (id) => {
        // localStorage에서 todos 배열 가져오기
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const completedTodos = todos.filter((todo) => todo.id !== id);

        // 업데이트된 배열을 localStorage에 저장
        localStorage.setItem('todos', JSON.stringify(completedTodos));
        return true;
    };

    return (
        <>
            <AuthContext.Provider value={{ creating, deleting }} >
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useCreate = () => useContext(AuthContext);