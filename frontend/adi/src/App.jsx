import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './component/Register'
import View from './component/View'

function App() {
  

  return (
   <div style={{border:'5px solid red', padding:'20px' }}><h1 >CRUD FUNCTION</h1>
    <Register/>
    <View/>

   </div>
  )
}

export default App
