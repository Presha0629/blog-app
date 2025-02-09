import {useNavigate } from "react-router-dom";
// import DetailPage from "./DetailPage";
import './App.css';
import { collection, getDocs, query, where } from "firebase/firestore"; 
import {useEffect, useState } from "react";
import { db } from "./FirebaseConfig";
// import { UserContext } from "./Context";

const listBlogs=async(setBlogs)=>{
  let blogs=[];
  let userId=localStorage.getItem("uID");
  // console.log(typeof user.uid);
  const q = query(collection(db, "blogs"))
  const querySnapshot = await getDocs(q, where('userId','==',userId));
  querySnapshot.forEach((doc) => {
    let temp=doc.data();
    temp=Object.assign(temp,{id:doc.id});
    blogs.push(temp);

    // blogs.push(doc.data());
    // console.log(doc);
    
    
  });
  // console.log(blogs);
  setBlogs(blogs);
}


function List() {
  const navigate=useNavigate();
  const [blogs,setBlogs]=useState([]);
  // const user = useContext(UserContext)

  useEffect(()=>{
   listBlogs(setBlogs)
  }, 
  []);


  return (
    <>
      <div className="list">
        {blogs.map((blg) => (
          <div className="card" onClick={()=>navigate("/home/detail", {state:{blog:blg}})}  key={blg.id}>
            <h3> {blg.title}</h3>
            <h3>{blg.author} </h3>
            {/* <h3>{blg.date}</h3> */}
          </div>
        ))}
      </div>
    </>
  )
}


export default List;