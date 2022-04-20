import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { SignUpPage } from './components/SignUpPage';
import { LogInPage } from './components/LogInPage';
import { AccountPage } from './components/AccountPage';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="*" element={<p>Page not found! Oh NO!</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
