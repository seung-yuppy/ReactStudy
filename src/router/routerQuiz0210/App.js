import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoApp from "./todoApp";
import { AuthProvider } from "./AuthContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/todo" element={<TodoApp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;