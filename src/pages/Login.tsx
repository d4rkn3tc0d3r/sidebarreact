import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:5032/api/login", {
                username,
                password,
            });

            const { access_token } = response.data;
            // Guarda el token en localStorage o en cookies
            localStorage.setItem("token", access_token);

            // Redirige al usuario al dashboard
            window.location.href = "/dashboard";
        } catch (err) {
            setError("Credenciales inválidas o error en el servidor.");
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
