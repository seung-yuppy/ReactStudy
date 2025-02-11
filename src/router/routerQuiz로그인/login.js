import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            navigate("/admin");
        } else {
            setError("로그인 실패!");
        }
    }

    return (
        <>
            <form onSubmit={handleLogin} style={{ padding: '20px' }}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <h1 style={{ color: 'red' }}>{error}</h1>}
                <button type="submit">로그인</button>

            </form>
        </>
    );
}

export default Login;