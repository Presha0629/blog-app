import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

function DetailPage({blog,setBlog}){
    const handleDelete=(id)=>{
        setBlog((blog)=>blog.filter((b)=>b.id !==id))
    };
    const navigate = useNavigate();
    return(
      <>
        <div>
          {blog.map((b)=>(
            <div key={b.id}>
              <h3>{b.id}. {b.title}</h3>
              <p>Author: {b.author}</p>
              <p>Date: {b.date}</p>
              <p>Content: {b.content}</p>
              <p>Tags: {b.tags}</p>
              <button  onClick={
                () => handleDelete(b.id)
                }>Delete</button>

              <br />
              <br />
              <button onClick={
                ()=>navigate("/")
                }>Hide</button>
            </div>
            
          ))}
        </div>
      </>
    ) 
  }

  export default DetailPage;
 
