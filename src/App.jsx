import './App.scss'

import { Footer } from './assets/components/Footer/Footer'
import { Header } from './assets/components/Header/Header'
import { Main } from './assets/components/Main/Main'
import { useState } from 'react'

function App() {
  const [filterPanel, setFilterPanel] = useState(false)

  const toggleFilterPanel = () => {
    setFilterPanel((prev) => !prev)
  }

  return (
    <>
      <Header filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />
      <Main filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />
      <Footer />
    </>
  )
}

export default App
