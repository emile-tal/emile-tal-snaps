import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './assets/components/Footer/Footer'
import { Header } from './assets/components/Header/Header'
import { HomePage } from './assets/pages/HomePage/HomePage'
import { useState } from 'react'

function App() {
  const [filterPanel, setFilterPanel] = useState(false)

  const toggleFilterPanel = () => {
    setFilterPanel((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Header filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />
      <Routes>
        <Route path='/' element={<HomePage filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
