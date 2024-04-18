import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eye from './Components/Eye'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Headroom from 'react-headroom'
import Cursor from './Components/Cursor'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <Cursor/>
      <div className=' bg-zinc-900'></div>
      
      <Headroom >

            <Navbar  /> 
      </Headroom>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
{/* Same as */}
<ToastContainer />
      <LandingPage  />
      {/* <Marquee/> */}
      <About/>
      <Eye/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
