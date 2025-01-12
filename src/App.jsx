import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Home'
import AddBlog from './AddBlog'
import DetailPage from './DetailPage'


function App() {
  const [blog,setBlog]=useState([]);
  const navigate=useNavigate();
  return (
      <>
      <div className='main'>
        <span></span>
        <h1 className='header'>Blog App</h1>
        <button className='addBlog' onClick={()=>navigate("/add")}>Add Blog</button>
      </div>
      <Routes>
        
        <Route path="/"
          element={<Home blog={blog} setBlog={setBlog}/>}/>

        <Route path="/add"
          element={<AddBlog setBlog={setBlog} blog={blog}/>}
        />

        <Route path="/detail"
          element={<DetailPage setBlog={setBlog} blog={blog}/>}
          />
      </Routes>
      </>
  )
}


export default App
