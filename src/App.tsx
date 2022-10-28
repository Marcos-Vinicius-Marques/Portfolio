import styles from './styles.module.css'
import { Header } from './components/header/header'
import { Body } from './components/body/body' 

import { useState, useEffect } from "react"


const App = () => {

  return (
    <>
      <Header />
      <Body />
      <footer style={{height:'400px', backgroundColor:"#2f3e46",}}>
        ...
      </footer>
    </>
  )
}

export default App
