import { Provider } from "react-redux";
import UserList from "./userList";
import { userStore } from "./userStore";

function App() {
    return (
        <Provider store={userStore}>
            <UserList />
        </Provider>
    )
}
export default App;