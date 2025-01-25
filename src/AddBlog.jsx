import { useState } from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import './App.css';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from './FirebaseConfig';


function AddBlog({setBlog,blog}){
    const [inputTitle,setInputTitle]=useState("");
    const [inputAuth,setInputAuth]=useState("");
    const [inputContent,setInputContent]=useState("");
    const [inputTags,setInputTags]=useState("");
    const navigate = useNavigate();
    const location=useLocation();
    const{uID}=location.state || {};
  
    console.log("debug userID",uID);
  
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
    
      <button onClick={async()=>{

          let newBlog=
            { 
              "userId":uID,
              "title":inputTitle,
              "author":inputAuth,
              "content":inputContent,
              "tags":inputTags,
              "date":new Date()
            }
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
              // setBlog([...blog, newBlog]);
              
            }
            try {
              const docRef = await addDoc(collection(db, "blogs"), 
              newBlog
            ).then(()=>
              navigate("/home")
                        )
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
          
          console.log("newBlog:", newBlog, "Type:", typeof newBlog);
           
           
      }}>Submit</button>
    
        </div>

    )
  }

  export default AddBlog;