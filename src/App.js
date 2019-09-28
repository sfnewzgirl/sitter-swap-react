import Header from './components/Header';
import LogIn from './pages/Login';
import React from 'react';
import UserView from './pages/UserView';
import './App.css';

function App() {
  let loggedIn = true;
  return (
    <div className="sitter-swap-app">
      {loggedIn ? 
        <UserView loggedIn={loggedIn} /> : 
        <LogIn loggedIn={loggedIn}/>}
    </div>
  );
}

export default App;