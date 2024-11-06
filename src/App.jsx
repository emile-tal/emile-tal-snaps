import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'
import { SingleImagePage } from './pages/SingleImagePage/SingleImagePage'
import { useState } from 'react'

function App() {
  const [filterPanel, setFilterPanel] = useState(false)

  const toggleFilterPanel = () => {
    setFilterPanel((prev) => !prev)
  }

  return (
    <BrowserRouter>
      <Header filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} setFilterPanel={setFilterPanel} />
      <Routes>
        <Route path='/' element={<HomePage filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />} />
        <Route path='/image/:imageId' element={<SingleImagePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
