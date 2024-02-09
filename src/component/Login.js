import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3003/", {
                email,
                password
            });
            if (res.data === "exist") {
                history('/home', { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("Not Logged In");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            alert("Wrong Details");
        }
    }

    return (
        <div className="login-container">
            <h2>Login page</h2>
            <form onSubmit={submit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field"
                /><br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="input-field"
                /><br />
                <button type="submit" className="submit-button">Login</button>
            </form>
            <p className="or">OR</p>
            <Link to="/register" className="signup-link">Sign Up</Link>
        </div>
    );
}
