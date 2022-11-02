import styles from './styles.module.css'
import { Header } from './components/header/header'
import { Body } from './components/body/body' 
import { Footer } from './footer/footer' 
import { useState, useEffect } from "react"


const App = () => {

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
