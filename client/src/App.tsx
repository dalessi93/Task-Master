import React, { useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { SignUpPage } from './components/SignUpPage';
import { LogInPage } from './components/LogInPage';
import { AccountPage } from './components/AccountPage';
import { ActionType, ApplicationContext, ApplicationContextReducer, DefaultApplicationState } from './components/context/application-context';
import axios from 'axios';


function App() {
  const [appState, appAction] = useReducer(
    ApplicationContextReducer,
    DefaultApplicationState
);

  useEffect(() => {
    axios
        .get('/api/session')
        .then((user: any) => {
          if (user) {
            appAction({
                type: ActionType.LOGIN,
                payload: {
                    user
                },
            });
        }
        })
        
}, []);

  return (
    <div className="App">
      <ApplicationContext.Provider value={[appState, appAction]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          
          <Route path="/account/*" element={<AccountPage />} />
          
          <Route path="*" element={<p>Page not found! Oh NO!</p>} />
        </Routes>
      </BrowserRouter>
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
