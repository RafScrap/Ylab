import React, {useState} from "react";
import './App.css';
import LoginForm from './LoginForm'
import UserForm from './UserForm'

function App() {

  const [visibleLogin, setVisibleLogin] = useState(true);

  if (visibleLogin) {
    return (
      <LoginForm setVisibleLogin={setVisibleLogin}/>
    );
  }
  else {
    return (
      <UserForm setVisibleLogin={setVisibleLogin}/>
    );
  };
}

export default App;
