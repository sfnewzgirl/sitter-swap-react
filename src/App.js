import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import React from 'react';
import UserPage from './pages/UserPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="sitter-swap-app">
        <Route path="/" component={Header} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/dashboard" component={UserPage} />
      </div>
    </Router>
  );
}

export default App;
