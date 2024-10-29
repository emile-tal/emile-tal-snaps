import { useState } from 'react'
import './App.scss'
import { Header } from './assets/components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
