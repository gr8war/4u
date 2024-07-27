import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MainPage from './Components/MainPaje/Main.jsx';
import About from './Components/About/About.jsx';
import QuizPage from './Components/Quiz/QuizPage.jsx';
import DomainDetailsPage  from './Components/Quiz/GuiltyDomain.jsx';
import SimulationPage from './Components/Simulation/SimulationPage.jsx';
import ContentPage from './Components/Content/ContentPage.jsx';
import Login from './Components/Aunthefication/Login.jsx';
import RegistrationPage from './Components/Aunthefication/RegistrationPage.jsx';
import { AuthProvider } from './Components/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
    <Router>
     <Routes>
     <Route path="/" element={<MainPage />} />
     <Route path="/about" element={<About />} />
     <Route path="/quiz" element={<QuizPage />} />
     <Route path="/content" element={<ContentPage />} />
     <Route path="/simulation" element={<SimulationPage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/registration" element={<RegistrationPage />} />
     <Route path="/domain/:domainName" element={<DomainDetailsPage />} />
     </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
