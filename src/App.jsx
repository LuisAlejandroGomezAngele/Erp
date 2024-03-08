import { useState, useEffect } from 'react'
import Login from './components/Login'
import Slidebar from './components/Seccions/Slidebar'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const Logged = Number(localStorage.getItem('isLogged')) ?? 0

    if (Logged == 1) {
      setIsLogged(true)
    }
  }, [])

  return (
    <>

      {isLogged ? (
        <>
          <Slidebar>
          </Slidebar>
        </>
      ) :
        <Login
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />}
    </>

  )
}

export default App
