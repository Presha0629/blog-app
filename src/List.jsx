import {useNavigate } from "react-router-dom";
// import DetailPage from "./DetailPage";
import './App.css';
import { collection, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";

const listBlogs=async()=>{
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  });

}
function List({ setBlog }) {
const navigate=useNavigate();
const [blogs,setBlogs]=useState([]);

useEffect(()=>{
  const response = listBlogs()
  console.log("response: ", response)

  }, []);


  return (
    <>
      <div className="list">
        {blogs.map((blg) => (
          <div className="card" onClick={()=>navigate("/home/detail", {state:{id:blg.id}})} key={blg.id}>
            <h3> {blg.title}</h3>
            <h3>{blg.author} </h3>
            <h3>{`${blg.date.getFullYear()}/${blg.date.getMonth()}/${blg.date.getDate()}`}</h3>
          </div>
        ))}
      </div>
    </>
  )
}


export default List;