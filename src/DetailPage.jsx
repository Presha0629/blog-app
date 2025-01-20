import { Link } from "react-router-dom";
import {useNavigate,useLocation} from 'react-router-dom'
import './App.css';

function DetailPage({blog,setBlog}){
    const handleDelete=(id)=>{
        setBlog((blog)=>blog.filter((b)=>b.id !==id));
        navigate('/home')
    };

    const navigate = useNavigate();
    const location=useLocation();
    const {id}=location.state || {};

    const blogDetails = blog?.find((blg) => blg.id == id);



    if (!id || !blogDetails) {
      return (
        <div>
          <p>Blog Not Found</p>
          <button onClick={() => navigate("/home")}>Go Back</button>
        </div>
      );
    }
    return(
      <>
        <div className>
           
              <div  className="details" key={blogDetails.id}>
                <h3>{blogDetails.id}. {blogDetails.title}</h3>
                <p>Author: {blogDetails.author}</p>
                <p>Date: {blogDetails.date}</p>
                <p>Content: {blogDetails.content}</p>
                <p>Tags: {blogDetails.tags}</p>
                <button  onClick={
                  () => handleDelete(blogDetails.id)
                  }>Delete</button>

                <br />
                <br />
                <button onClick={
                  ()=>navigate("/home")
                  }>Hide</button>
            </div>
        </div>
      </>
    ) 
  }

  export default DetailPage;
 
