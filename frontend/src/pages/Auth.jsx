import React, {useState} from "react";
import Header from "../components/Header.jsx";
import {login, register} from "../utils/auth.jsx";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isLogin) {
                const res = await login(username, password);
                if (res.ok) {
                    setMessage("Logged in!");
                    setTimeout(() => {
                        window.location.href = "/profile/me";
                    }, 1000);
                } else {
                    setMessage("Login failed");
                }
            } else {
                const response = await register(username, password);
                setMessage(response);
            }
        } catch (error) {
            console.error("Auth error:", error);
            setMessage("Something went wrong.");
        }
    };

    return (
            <div className="auth-container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h2>{isLogin ? "Login" : "Register"}</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">{isLogin ? "Login" : "Register"}</button>
                    <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "No account? Register" : "Have an account? Login"}
                    </p>
                    <p className="message">{message}</p>
                </form>
            </div>
    );
}
