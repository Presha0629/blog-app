import { Link } from "react-router-dom";
function Home({blog,setBlog}){
    const handleDelete=(id)=>{
        setBlog((blog)=>blog.filter((b)=>b.id !==id))
    };
    return(
      <>
        <div>
          {blog.map((b)=>(
            <div  key={b.id}>
            <h3><Link to="/detail">{b.title}</Link></h3>
            </div>
          ))}
        </div>
      </>
    ) 
  }
 
    

 

  export default Home;