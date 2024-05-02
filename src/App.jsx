import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './pages/loginpage';
import SignUp from './pages/signup';
import Home from './pages/home';
import Donatebook from './components/donatepage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donatebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
