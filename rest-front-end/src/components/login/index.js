import React from "react";

export const Login = ({setPass, setEmail, loginHandler}) => {
    return(
        <form onSubmit={loginHandler}>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value) } />
        <input placeholder='password' onChange={(e) => setPass(e.target.value)}  />
        <button type='submit'>Login</button>
      </form>
    )
}