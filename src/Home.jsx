import { useContext, useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate,useLocation} from 'react-router-dom'
import List from './List'
import AddBlog from './AddBlog'
import DetailPage from './DetailPage'
import { UserContext } from './Context'
// import SignUp from './App'



function Home(){
    const [blog,setBlog]=useState([]);
    const navigate=useNavigate();
    const location=useLocation();
    const{uID}=location.state || {};
    // const location=useLocation();
    // const {signUname}=location.state || {};
    // console.log(signUname || "No username passed");

    const user=useContext(UserContext);
    const email=user.email;
    const splitted=email.split("@");
    const name=splitted[0];


    // console.log("This is for context data:",{name});
   
    return(
        <>
        <div className='main'>
        <span></span>
        {/* <h3>{signUname}</h3> */}
        <button className='uName'>{name}</button>
        <h1 className='header'>Blog App</h1>
        <button className='addBlog' onClick={()=>navigate("/home/add",{state:{uID:uID}})}>Add Blog</button>
        <button onClick={()=>navigate("/")}>Logout</button>
      </div>
      <Routes>
        
        <Route path="/"
          element={<List blog={blog} setBlog={setBlog}/>}/>

        <Route path="/add"
          element={<AddBlog setBlog={setBlog} />}
        />

        <Route path="/detail"
          element={<DetailPage setBlog={setBlog} blog={blog}/>}
          />

        {/* <Route path="/login"
          element={<Login/>}

        /> */}
      </Routes>
        
        </>
    )
}

export default Home;