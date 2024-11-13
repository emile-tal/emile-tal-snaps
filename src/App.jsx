import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'
import { HomePage } from './pages/HomePage/HomePage'
import { NavBar } from './components/NavBar/NavBar'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { SingleImagePage } from './pages/SingleImagePage/SingleImagePage'
import { useState } from 'react'

function App() {
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)

  const toggleFilterPanel = () => {
    setFilterPanelOpen((prev) => !prev)
  }

  const closeFilterPanel = () => {
    setFilterPanelOpen(false)
  } //remove this function from everywhere and make it so that homepage opens this happens

  return (
    <BrowserRouter>
      <NavBar filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} />
      <Routes>
        <Route path='/' element={<HomePage filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} closeFilterPanel={closeFilterPanel} />} />
        <Route path='/image/:imageId' element={<SingleImagePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
