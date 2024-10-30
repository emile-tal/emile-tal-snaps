import { useState } from 'react'
import './App.scss'
import { Header } from './assets/components/Header/Header'
import { GallerySection } from './assets/components/GallerySection/GallerySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <GallerySection />
    </>
  )
}

export default App
