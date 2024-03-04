function Login() {

    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen"> 
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">Iniciar Sesion</h1>
            <form>
                <div className="mb-4">
                    <label for="email" className="block text-sm font-medium text-grey-600">Usuario</label>
                    <input className="mt-1 p-2 w-full border rounded-md" type="email" id="email" name="email"></input>
                </div>
                <div className="mb-4">
                    <label for="email" className="block text-sm font-medium text-grey-600">Contraseña</label>
                    <input className="mt-1 p-2 w-full border rounded-md" type="password" id="password" name="password"></input>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-3 w-full rounded-md mt-3">Iniciar Sesion</button>
            </form>

        </div>
        

        </div>
    )
}

export default Login