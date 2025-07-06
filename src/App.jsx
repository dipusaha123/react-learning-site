
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navber from './Component/Navber/Navber'

function App() {
  const [bookMarked, setBookMarked ] = useState([])
  const [readingCount , setReadingCount] = useState(0)

  const handleBookMark = (blog) => {
   setBookMarked([...bookMarked,blog])
  }
  
  const handleMarkAsRead = (time,id) => {
    const newTime = readingCount + time ;
    setReadingCount(newTime)
    handleRemoveFromBookMark(id)

  }

  const handleRemoveFromBookMark = (id) => {
    const remaingBookMark = bookMarked.filter((mark) => mark.id !== id);
    setBookMarked(remaingBookMark)


  }


  return (
    <>
     <Navber></Navber>
   

     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        
          <Blogs  handleBookMark = {handleBookMark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading Time : {readingCount}</h1>
        <h1>BookMarked Count : {bookMarked.length}</h1>


        {
          bookMarked.map((marked) => <p className='bg-red-600 p-2 shadow m-2'>{marked.title}</p>)
        }
      </div>
     </div>
    </>
  )
}

export default App
