import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Navs from './components/Navs'
import Layout from './Layout'
import Container from './components/Container'
import { menuItems } from './data'


function App() {
console.log('oko',menuItems)
  return (
    <div>
      <Navbar menuItems={menuItems} />
      <div className="bg-accent" >
        <Container>
          <Layout />
        </Container>
      </div>

    </div>
  )
}

export default App
