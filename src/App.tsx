// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';

import FirstPage from './pages/FirstPage/FirstPage'
import SecondPage from './pages/SecondPage/SecondPage'
import { Header } from './components/Header/Header'

// import './App.css'

function App() {
 

  return (
  
       <Routes>
     
      <Route path="/" element={<FirstPage/>} />
      <Route path="/second" element={<SecondPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  
  )
}

export default App
