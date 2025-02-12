import { Provider } from "react-redux";
import MovieList from "./movieList";
import { loggingStore } from "./logginnStoreMovie";


function App() {
    return (
        <Provider store={loggingStore}>
            <MovieList />
        </Provider>
    );
}
export default App;