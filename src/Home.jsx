import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate} from 'react-router-dom'
import List from './List'
import AddBlog from './AddBlog'
import DetailPage from './DetailPage'
import Login from './App'

function Home(){
    const [blog,setBlog]=useState([]);
    const navigate=useNavigate();
    return(
        <>
        <div className='main'>
        <span></span>
        <h1 className='header'>Blog App</h1>
        <button className='addBlog' onClick={()=>navigate("/home/add")}>Add Blog</button>
        <button onClick={()=>navigate("/")}>Logout</button>
      </div>
      <Routes>
        
        <Route path="/"
          element={<List blog={blog} setBlog={setBlog}/>}/>

        <Route path="/add"
          element={<AddBlog setBlog={setBlog} blog={blog}/>}
        />

        <Route path="/detail"
          element={<DetailPage setBlog={setBlog} blog={blog}/>}
          />

        <Route path="/login"
          element={<Login/>}

        />
      </Routes>
        
        </>
    )
}

export default Home;