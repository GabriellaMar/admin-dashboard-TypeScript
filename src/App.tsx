// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage'
import SharedLayout from './pages/SharedLayout/SharedLayout'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Customers } from './components/Customers';
import { Orders } from './components/Orders';
import { Products } from './components/Products';
import { Suppliers } from './components/Suppliers';


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
    <Route path="/" element={<PrivateRoute redirectTo="/login" isAuth={registrated} component = {<SharedLayout />} /> } >
    <Route path="/dashboard" element={<Dashboard  />} />
    <Route path="/orders" element={<Orders  />} />
    <Route path="/products" element={<Products  />} />
    <Route path="/suppliers" element={<Suppliers  />} />
    <Route path="/customers" element={<Customers  />} />
    </Route>
  </Routes>
  )
}

export default App
