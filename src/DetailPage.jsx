import { Link } from "react-router-dom";
import {useNavigate,useLocation} from 'react-router-dom'
import './App.css';

function DetailPage(){
    const handleDelete=(id)=>{
        // setBlog((blog)=>blog.filter((b)=>b.id !==id));
        // navigate('/home')
    };

    const navigate = useNavigate();
    const location=useLocation();
    const {blog}=location.state || {};

    // const blogDetails = blog?.find((blg) => blg.id == id);



    // if (!id || !blogDetails) {
    //   return (
    //     <div>
    //       <p>Blog Not Found</p>
    //       <button onClick={() => navigate("/home")}>Go Back</button>
    //     </div>
    //   );
    // }
    return(
      <>
        <div className="detailsdiv">
              <div  className="details" key={blog.id}>
                <h3>{blog.title}</h3>
                
                <p>Author: {blog.author}</p>
                {/* <p>Date: {blog.date}</p> */}
                <p>Content: {blog.content}</p>
                <p>Tags: {blog.tags}</p>
                <button  onClick={
                  () => handleDelete(blog.id)
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
 
