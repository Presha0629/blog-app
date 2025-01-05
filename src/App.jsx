import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom'

function App() {

  const blogs=[
    {
      "id": 1,
      "title": "The Art of Mindful Living",
      "author": "Jane Doe",
      "date": "2025-01-05",
      "content": "In a world filled with distractions, practicing mindfulness can help us find balance and peace. This blog explores the benefits of mindfulness, practical tips for integrating it into daily life, and how it can positively impact mental health.",
      "tags": ["mindfulness", "mental health", "lifestyle"]
    },
    {
      "id": 2,
      "title": "10 Tips for Beginner Programmers",
      "author": "John Smith",
      "date": "2024-12-20",
      "content": "Programming can be overwhelming for beginners, but with the right guidance, it becomes an enjoyable journey. From mastering the basics to debugging effectively, these ten tips will set you on the path to coding success.",
      "tags": ["programming", "coding", "beginner tips"]
    },
    {
      "id": 3,
      "title": "Exploring Hidden Gems: Offbeat Travel Destinations",
      "author": "Sarah Lee",
      "date": "2024-11-30",
      "content": "Want to escape the tourist crowds? Discover unique and lesser-known travel destinations around the world that offer breathtaking views, rich history, and unforgettable experiences.",
      "tags": ["travel", "adventure", "hidden gems"]
    },
    {
      "id": 4,
      "title": "How to Cook the Perfect Pasta",
      "author": "Chef Mario",
      "date": "2025-01-02",
      "content": "Cooking pasta may seem simple, but achieving the perfect texture and flavor requires skill. This guide will teach you how to select the right pasta, cook it al dente, and pair it with the ideal sauce for a mouthwatering dish.",
      "tags": ["cooking", "recipes", "pasta"]
    },
    {
      "id": 5,
      "title": "The Rise of Artificial Intelligence in Education",
      "author": "Dr. Emily Carter",
      "date": "2024-12-15",
      "content": "Artificial intelligence is transforming the education sector. From personalized learning experiences to automated grading systems, this blog delves into the latest AI innovations and their impact on students and educators.",
      "tags": ["AI", "education", "technology"]
    },
    {
      "id": 6,
      "title": "Fitness Hacks for Busy Professionals",
      "author": "Mike Johnson",
      "date": "2024-11-10",
      "content": "Struggling to stay fit with a hectic schedule? These quick and effective fitness hacks will help you stay active and healthy without sacrificing precious time.",
      "tags": ["fitness", "health", "productivity"]
    }
  ]
  
  return (
      <>
      <h1>Blog App</h1>
      <Routes>
        <Route path="/"
          element={<Home blogs={blogs}/>}/>
      </Routes>
      </>
  )
}

function Home({blogs}){
  return(
    <>
      <div>
        {blogs.map((blog)=>(
          <div key={blog.id}>
            <h5>{blog.title}</h5>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            <p>Content: {blog.content}</p>
            <p>Tags: {blog.tags}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function AddBlog(){
  return(
    <>
    Author: <input type="text" />
    <br />
    Date: <input type="text" />
    <br />
    Content: <input type="text" />
    <br />
    Tags: <input type="text" />
    </>
  )
}
export default App
