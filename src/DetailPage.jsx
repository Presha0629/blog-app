import { Link } from "react-router-dom";
import {useNavigate,useLocation} from 'react-router-dom'

function DetailPage({blog,setBlog}){
    const handleDelete=(id)=>{
        setBlog((blog)=>blog.filter((b)=>b.id !==id));
        navigate('/')
    };

    const navigate = useNavigate();
    const location=useLocation();
    const {id}=location.state || {};

    const blogDetails = blog?.find((blg) => blg.id == id);



    if (!id || !blogDetails) {
      return (
        <div>
          <p>Blog Not Found</p>
          <button onClick={() => navigate("/")}>Go Back</button>
        </div>
      );
    }
    return(
      <>
        <div>
           
              <div key={blogDetails.id}>
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
                  ()=>navigate("/")
                  }>Hide</button>
            </div>
        </div>
      </>
    ) 
  }

  export default DetailPage;
 
