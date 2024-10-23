

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks]= useState([]);

  const handleAddToBookmark =(blog)=>{
      console.log('bookmark adding soon')
  }

  return (
    <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <main className='md:flex gap-3'>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks ></Bookmarks>
     </main>
    </div>
  )
}

export default App
