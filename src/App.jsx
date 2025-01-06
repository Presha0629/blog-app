import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate,Link} from 'react-router-dom'

function App() {
  const [blog,setBlog]=useState([]);
  
  return (
      <>
      <h1>Blog App</h1>
      <p><Link to="/add">Add Blog</Link></p>
      <Routes>
        <Route path="/"
          element={<Home blog={blog}/>}/>

        <Route path="/add"
          element={<AddBlog setBlog={setBlog} blog={blog}/>}
        />
      </Routes>
      </>
  )
}

function Home({blog}){
  return(
    <>
      <div>
        {blog.map((b)=>(
          <div key={b.id}>
            <h3>{b.title}</h3>
            <p>Author: {b.author}</p>
            <p>Date: {b.date}</p>
            <p>Content: {b.content}</p>
            <p>Tags: {b.tags}</p>
          </div>
        ))}
      </div>
    </>
  ) 
}

function AddBlog({setBlog,blog}){
  const [inputId,setInputId]=useState("");
  const [inputTitle,setInputTitle]=useState("");
  const [inputAuth,setInputAuth]=useState("");
  const [inputDate,setInputDate]=useState("");
  const [inputContent,setInputContent]=useState("");
  const [inputTags,setInputTags]=useState("");
  const navigate = useNavigate();

  return(
    <>
    Id:<input type="text" onChange={
      (e)=>(setInputId(e.target.value))
      } />
    <br />
    Title:<input type="text" onChange={
      (e)=>(setInputTitle(e.target.value))
      } />
    <br />
    Author: <input type="text" onChange={
      (e)=>(setInputAuth(e.target.value))
      } />
    <br />
    Date: <input type="text"  onChange={
      (e)=>(setInputDate(e.target.value))

    } />
    <br />
    Content: <input type="text"  onChange={
      (e)=>(setInputContent(e.target.value))
      } />
    <br />
    Tags: <input type="text"  onChange={
      (e)=>(setInputTags(e.target.value))
    } />

  <button onClick={()=>{
      let newBlog=
         {
          "id":inputId,
          "title":inputTitle,
          "author":inputAuth,
          "date":inputDate,
          "content":inputContent,
          "tags":inputTags
         }
      
      setBlog([...blog,newBlog])
      navigate("/"); 
  }}>Add Blog</button>

    </>
  )
}
export default App
