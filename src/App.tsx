// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import SharedLayout from './pages/SharedLayout/SharedLayout'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';


// import './App.css'

function App() {
  const [registrated, setRegistrated] = useState(false);

  
  const handleLoginSuccess = () => {
    setRegistrated(true); 
    console.log("User logged in successfully. registrated:", registrated);
  };

  return (

    <Routes>
    <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} isAuth={registrated} />} />
    {/* Використовуйте Route для захищених маршрутів */}
    <Route path="/" element={
      <PrivateRoute redirectTo="/login" isAuth={registrated}>
        <SharedLayout />
      </PrivateRoute>
    } />
  </Routes>
  )
}

export default App
