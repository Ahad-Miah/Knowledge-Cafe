import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const[bookmarks,setbookmarks]=useState([]);
  const[readingTime,setReadingTime]=useState(0);


  const handleBookmark = blog =>{
   const newBookmarks=[...bookmarks, blog];
   setbookmarks(newBookmarks);

  }
  const handleTime =(id,time) =>{
      const newTime=readingTime+time;
      setReadingTime(newTime);
      const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
      setbookmarks(remainingBookmarks);
  }
  
  return (
    <>
    
      <Header></Header>
      <div className=' container mx-auto md:flex gap-4 mt-6 mb-20'>
        <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
        </div>
      
    </>
  )
}

export default App
