import React, { useState } from 'react';
import axios from 'axios';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const url = 'https://localhost:7254/api/Login/login';
        const userData = {
            nameUser: username,
            pass: password
        };

        try {
            const response = await axios.post(url, userData);

            console.log('Bienvenido ' + response.data.user.nameP + ' ' + response.data.user.lastNameP)
        } catch (error) {
            if (error.response.status === 401){
                console.log(error.response.data.message);
            } else {
                console.log('Error en la petición:', error);
            }
        }
    };

    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Iniciar Sesion</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-grey-600">Usuario</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md"
                            type="email"
                            id="email"
                            name="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-grey-600">Contraseña</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <button
                        onClick={handleLogin} type="submit" className="bg-blue-500 text-white p-3 w-full rounded-md mt-3">Iniciar Sesion</button>
                </form>

            </div>


        </div>
    )
}

export default Login