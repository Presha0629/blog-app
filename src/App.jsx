import './App.css'
import { Route, Routes, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import Home from './Home';




function App() {



  return (
      <>

      <Routes>
        <Route path="/" 
          element={<Login/>}
        />

        <Route path="/signup"
          element={<SignUp/>}
        />

        <Route path="/home/*"
          element={<Home/>}
        />
      </Routes>
      </>
  )
}


function Login(){
  const [uname,setUname]=useState("");
  const [pswd,setPswd]=useState("");
  const navigate=useNavigate();

  const credential={
    Username:"Presha",
    Password:"Presha"
  }
  return(
    <>
        <div>
          <h3>Login Page</h3>

        <div className='logindiv'>
          <form action=""  className='loginform' >
            <div className='formlabel'>
              <label htmlFor="UserName">UserName</label>
              <input type="text" name='UserName' value={uname} onChange={
                (e)=>(setUname(e.target.value))
                } 
                        />
            </div>

            <div className='formlabel'>
              <label htmlFor="Password">Password</label>
              <input type="password" name='Password' value={pswd} onChange={(e)=>(setPswd(e.target.value))} />
            </div>
            
            <button type='submit' onClick=
            {
              ()=> {
                if( uname===credential.Username && pswd===credential.Password)
                    navigate("/home");
                
              }}>Login</button>
            <button onClick={()=> navigate("/signup")}>Sign up</button>
            <a>Forgot Password</a>
          </form>
        </div>
      </div>
    </>
  )
}


function SignUp(){
  const navigate=useNavigate();
  return(
    <>
      <div className='signup'>
        <h3>Sign Up Page</h3>
        <form action="">
        <label htmlFor="UserName">UserName</label>
        <input type="text" name='UserName' />
        <label htmlFor="Name">Name</label>
        <input type="text" name='Name' />
        <label htmlFor="Password">Password</label>
        <input type="password" name='Password' />
        <label htmlFor="ConfirmPswd">Confirm Password</label>
        <input type="password" name='ConfirmPswd' />
        <button type='submit'>Sign up</button>
        <button onClick={()=> navigate("/")}>Log in</button>
        </form>
      </div>
    </>
  )
}


export default App
