

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks]= useState([]);
  const [mark,setMarks]=useState(0)
  const handleAddToBookmark =(blog)=>{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
  }

  const handleMarkAsRead =(id,time)=>{
    const total= mark+time;
    setMarks(total)
    console.log('mark clicked',time)

    const remainingBookmarks =bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks)

  }
  return (
    <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <main className='md:flex gap-3'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} mark={mark}></Bookmarks>
     </main>
    </div>
  )
}

export default App
