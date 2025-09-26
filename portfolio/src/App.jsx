import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Design from '../components/Design'
import Work from '../components/Work'
import Divider from '../components/Divider'
import About from '../components/About'
import Footer from '../components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <div className="reveal"><Design /></div>
    <Divider />
    <div className="reveal"><Work/></div>
    <div className="reveal"><About /></div>
    <div className="reveal"><Footer /></div>
    </>
  )
}

export default App
