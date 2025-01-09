import { Link } from "react-router-dom";
import DetailPage from "./DetailPage";

function Home({blog,setBlog}){
 
    return(
      <>
        <div>
          {blog.map((blg)=>(
            <div  key={blg.id}>
            <h3>
              <Link to="/detail" state={{id:blg.id}}>{blg.title}</Link>
            </h3>
            </div>
          ))}
        </div>
      </>
    ) 
  }
 
  
  export default Home;