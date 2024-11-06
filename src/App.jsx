import './App.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'
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
  }

  return (
    <BrowserRouter>
      <Header filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} closeFilterPanel={closeFilterPanel} />
      <Routes>
        <Route path='/' element={<HomePage filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} />} />
        <Route path='/image/:imageId' element={<SingleImagePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
