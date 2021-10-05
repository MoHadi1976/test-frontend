import React from 'react'

export const SignUp = ({setUserName, setEmail, setPass, submitHandler}) => {
    return(
        <form onSubmit={submitHandler}>
        <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
        <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input placeholder="Password" type='password' onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Submit</button>
          </form>
    )
}