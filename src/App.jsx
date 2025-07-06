
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navber from './Component/Navber/Navber'

function App() {
  

  return (
    <>
     <Navber></Navber>
   


     <div className="main-container flex text-center">
      <div className="left-container w-[70%]">
        
          <Blogs></Blogs>
      </div>
      <div className="right-container w-[30%]">
        <h1>Reading Time : 0</h1>
        <h1>BookMarked Count : 0</h1>
      </div>
     </div>
    </>
  )
}

export default App
