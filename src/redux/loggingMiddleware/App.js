import { Provider } from "react-redux";
import { loggingStore } from "./loggingStore";
import List from "./list";

function App() {
    return (
        <Provider store={loggingStore}>
            <List />
        </Provider>
    );
}
export default App;