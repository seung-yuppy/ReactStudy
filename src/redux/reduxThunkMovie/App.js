import { Provider } from "react-redux";
import { movieStore } from "./movieStore";
import MovieList from "./movieList";

function App() {
    return (
        <Provider store={movieStore}>
            <MovieList />
        </Provider>
    )
}
export default App;