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
    const [suname,setSUname]=useState("");
    const [spswd,setSPswd]=useState("");
    const [cpswd,setCPswd]=useState("");
    const [name, setName]=useState("");
    const navigate=useNavigate();

  return(
    <>
      <div className='signup'>
        <h3>Sign Up Page</h3>
        <form action="">
        <label htmlFor="UserName" >UserName</label>
        <input type="text" name='UserName' value={suname} onChange={(e)=>(setSUname(e.target.value))}/>
        <label htmlFor="Name">Name</label>
        <input type="text" name='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="Password">Password</label>
        <input type="password" name='Password' value={spswd} onChange={(e)=>(setSPswd(e.target.value))}/>
        <label htmlFor="ConfirmPswd">Confirm Password</label>
        <input type="password" name='ConfirmPswd' value={cpswd} onChange={(e)=>{setCPswd(e.target.value)}} />
        <button onClick={
          ()=>{
            if(spswd===cpswd)
              {navigate("/home")}    
            }
          }>Sign up</button>
        <button type='submit' onClick={
          ()=>(navigate("/"))
          }>Log in</button>
        </form>
      </div>
    </>
  )
}


export default App
