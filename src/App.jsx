import './App.css'
import { Route, Routes, useNavigate} from 'react-router-dom'
import {useState } from 'react';
import Home from './Home';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';
// import { UserContext } from './Context';



function App() {

  const [user, setUser]=useState({});


  return (
      <>
      
        <Routes>
          <Route path="/" 
            element={<Login setUser={setUser}/>}
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


function Login({setUser}){
  const [email,setEmail]=useState("");
  const [pswd,setPswd]=useState("");
  const navigate=useNavigate();

  // const credential={
  //   Username:"Presha",
  //   Password:"Presha"
  // }
  return(
    <>
        <div className='loginpage'>
          <h3>Login Page</h3>

        <div className='logindiv'>
          <form action=""  className='loginform' >
            <div className='formlabel'>
              <input placeholder="Email" type="email" name='email' value={email} onChange={
                (e)=>(setEmail(e.target.value))
                } 
                        />
            </div>

            <div className='formlabel'>
              <input placeholder="Password" type="password" name='Password' value={pswd} onChange={(e)=>(setPswd(e.target.value))} />
            </div>
            
            <button type='submit' className='formbutton' onClick=
              {
                async(e)=> {
                  e.preventDefault();
                  await signInWithEmailAndPassword(auth, email, pswd)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setUser(user);
                    
                    // console.log("autheti check",user);
                    localStorage.setItem("token",user.accessToken);
                    localStorage.setItem("email",user.email);
                    localStorage.setItem("uID",user.uid);
                    // ...
                    // navigate("/home",{state:{uID:user.uid}});
                    navigate("/home");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                  });
                  
                 
                  
                }}>Login</button>
            <button className='formbutton' onClick=
              {
                ()=> navigate("/signup")
                }>Sign up</button>
            <a>Forgot Password</a>
          </form>
        </div>
      </div>
    </>
  )
}


function SignUp(){
    const [semail,setSEmail]=useState("");
    const [spswd,setSPswd]=useState("");
    const [cpswd,setCPswd]=useState("");
    const [name, setName]=useState("");
    const navigate=useNavigate();

  return(
    <>
      <div className='signup'>
        <h3>Sign Up Page</h3>
        <form action="">
        <label htmlFor="Email" >Email</label>
        <input type="email" name='email' value={semail} onChange={(e)=>(setSEmail(e.target.value))}/>
        <label htmlFor="Name">Name</label>
        <input type="text" name='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="Password">Password</label>
        <input type="password" name='Password' value={spswd} onChange={(e)=>(setSPswd(e.target.value))}/>
        <label htmlFor="ConfirmPswd">Confirm Password</label>
        <input type="password" name='ConfirmPswd' value={cpswd} onChange={(e)=>{setCPswd(e.target.value)}} />
        <button onClick={
          async (e)=>{
            e.preventDefault()
            await createUserWithEmailAndPassword(auth, semail, spswd)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            }); 
            navigate("/"); 
            }
          }>Sign up</button>
        <button type='submit' onClick={
          ()=>{
            navigate("/")
          }
          }>Log in</button>
        </form>
      </div>
    </>
  )
}


export default App
