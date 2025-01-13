import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/LoginPage';
import ProductPage from './Pages/Productpage';
import RegisterPage from './Pages/Registerpage';
import { Toaster } from 'react-hot-toast';
import Aboutpage from './Pages/Aboutpage';
import Fashionpage from './Pages/Fashionpage';
import Electronicspage from './Pages/Electronicspage';
import Gamingpage from './Pages/Gamingpage';
import Otherpage from './Pages/Otherpage';  {/* Fixed the typo */}


/* import ProtectedRoute from './Component/ProtectedRoute'; // Only use if you need authentication guards */

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<Aboutpage />} />
          
          {/* Category Pages */}
          <Route path="/fashion" element={<Fashionpage />} />
          <Route path="/electronics" element={<Electronicspage />} />
          <Route path="/gaming" element={<Gamingpage />} />
          <Route path="/other" element={<Otherpage />} />
        
          {/* Protected Routes (Uncomment if using ProtectedRoute) */}
          {/* <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} /> */}
        </Routes>
      </BrowserRouter>
      <Toaster /> {/* Toast Notifications */}
    </div>
  );
};

export default App;
