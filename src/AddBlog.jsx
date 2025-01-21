import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css';


function AddBlog({setBlog,blog}){
    const [inputTitle,setInputTitle]=useState("");
    const [inputAuth,setInputAuth]=useState("");
    const [inputContent,setInputContent]=useState("");
    const [inputTags,setInputTags]=useState("");
    const navigate = useNavigate();
    
  
    return(
        
        <div className='form'>
        Title:<input type="text" onChange={
          (e)=>(setInputTitle(e.target.value))
          } />
        <br />
        Author: <input type="text" onChange={
          (e)=>(setInputAuth(e.target.value))
          } />
        <br />
        Content: <input type="text"  onChange={
          (e)=>(setInputContent(e.target.value))
          } />
        <br />
        Tags: <input type="text"  onChange={
          (e)=>(setInputTags(e.target.value))
        } />

      <br />  
    
      <button onClick={()=>{
          let id=0;
          if(blog.length===0){
            id=1;
          }
          else id=blog[blog.length-1].id+1;
          const date=new Date();
          const year = date.getFullYear(); 
          const month = date.getMonth() + 1; 
          const day = date.getDate();
    
          let newBlog=
            {
              "id":id,
              "title":inputTitle,
              "author":inputAuth,
              "date":`${year}/${month}/${day}`,
              "content":inputContent,
              "tags":inputTags
            }
            console.log("newBlog:", newBlog, "Type:", typeof newBlog);
            if (typeof newBlog === "object" && newBlog !== null) {
              let hasEmptyField = false;

              Object.entries(newBlog).forEach(([key, value]) => {
                if (!value) {
                  alert(`The field '${key}' is empty.`);
                  hasEmptyField = true;
                  // navigate("/add");
                }});

                if (hasEmptyField) {
                  navigate("/home/add");
                  return;
                }
              setBlog([...blog, newBlog]);
              navigate("/home");
              
            }
           
      }}>Submit</button>
    
        </div>

    )
  }

  export default AddBlog;