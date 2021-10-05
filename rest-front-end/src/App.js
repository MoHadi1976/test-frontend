import './App.css';
import React, {useState} from "react";
import { fetchRequest, login } from './utils';
import { Login } from "./components/login"
import { SignUp } from './components/signUp';

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  setData(fetchRequest(userName, email, pass, setData));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, pass, setData);
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
      <h1>Login</h1>
      <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
      <h1>{data ? data.name: 'No User Logged In'}</h1>
    </div>
  );
}

export default App;
