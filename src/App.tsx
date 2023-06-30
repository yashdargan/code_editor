import './App.scss'
import Navbar from './Components/Navbar'
import Notepad from './Components/Notepad'
import Sidebar from './Components/Sidebar'
import Terminal from './Components/Terminal'
function App() {

  return (
     <section className='main_container'>
     <Navbar/>
    <span className='center_container'>
        <Sidebar />
       <div className='code_container'>
        <Notepad />
        <Terminal />
        </div>
        </span>
     </section> 
  )
}

export default App
