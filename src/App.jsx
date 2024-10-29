import { useState } from 'react'
import './App.scss'
import { NavBar } from './assets/components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
