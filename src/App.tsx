 

import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Home from './pages/Home';
 

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;