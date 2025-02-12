import { Provider } from "react-redux";
import TodoList from "./todoList";
import { todoStore } from "./todoStore";

function App() {
    return (
        <Provider store={todoStore}>
            <TodoList />
        </Provider>
    )
}
export default App;