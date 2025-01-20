import {useNavigate } from "react-router-dom";
// import DetailPage from "./DetailPage";
import './App.css';


function List({ blog, setBlog }) {
const navigate=useNavigate();
  return (
    <>
      <div className="list">
        {blog.map((blg) => (
          <div className="card" onClick={()=>navigate("/home/detail", {state:{id:blg.id}})} key={blg.id}>
            <h3> {blg.title}</h3>
            <h3>{blg.author} </h3>
            <h3>{blg.date}</h3>
          </div>
        ))}
      </div>
    </>
  )
}


export default List;