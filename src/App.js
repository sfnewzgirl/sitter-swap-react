import Header from './components/Header';
import LoginPage from './pages/LoginView';
import React from 'react';
import UserView from './pages/UserView';
import './App.css';

function App() {
  let loggedIn = true;
  return (
    <div className="sitter-swap-app">
      {loggedIn ?
        <UserView loggedIn={loggedIn} /> :
        <LoginPage loggedIn={loggedIn} />}
    </div>
  );
}

export default App;
