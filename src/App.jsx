import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  return (
    <>
    
      <Header></Header>
      <div className=' container mx-auto md:flex gap-4 mt-6'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        </div>
      
    </>
  )
}

export default App
