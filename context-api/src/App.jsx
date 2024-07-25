import { useState } from 'react'

import './App.css'
// import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>

  <h1>Context api</h1>
      <Login/>

    <Profile/>
    </>
  )
}

export default App
