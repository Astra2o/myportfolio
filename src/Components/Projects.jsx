import React,{useState,useEffect} from 'react'
// import { useRef } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import '../App.scss'
// gsap.registerPlugin(useGSAP);


function Projects() {
  
 

  const [imghover, setimghover] = useState([0,0,0,0])
  // const mleave =(e)=>{
  //   console.log(e);
    

  // }

 useEffect(() => {
   
 
   
   

 
 
    var projectsElem = document.querySelectorAll('.project')
    projectsElem.forEach((elem)=>{
      elem.addEventListener('mouseenter',()=>{
        gsap.to(elem.childNodes[2], {
          opacity: 0.9,
          scale: 1
        });
       
      });
  
      elem.addEventListener('mouseleave',()=>{
        gsap.to(elem.childNodes[2], {
          opacity: 0,
          scale: 0
        });
      });

      elem.addEventListener('mousemove',(event)=>{
        gsap.to(elem.childNodes[2], {
    
          x: event.clientX - elem.getBoundingClientRect().x+10,
          y: event.clientY - elem.getBoundingClientRect().y-20,
        });
      })

    });
  }, [])

      

     
        // proimg.current.addEventListener('mousemove', (dets) =>  contextSafe(({ currentTarget }) => {
        //   gsap.to(currentTarget, { rotation: "+=360" });
        // }));
      
     
    



  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2'  className=' min-h-screen italic w-full '>
    <div className="projectheading  px-10 w-full py-10 border-b-2 border-zinc-700">
            <h1 id='projects' className='text-6xl italic '>
                Projects
             </h1>

         </div>
      <div className=' flex flex-col md:flex-row relative   align-middle justify-between'>

      
          <div id="left projects" className=' h-full md:w-[60%]  '>
            <div  className={`project group  pr-2 overflow-hidden hover:border-zinc-100  hover:border-t  relative md:pb-10 flex  }`}>

              <div className='left-left w-[84%] z-10  py-6 '>

                  <h2 className='text-3xl ml-[4vw]' >
                  LockBOX  <span className='text-xl capitalize'> - a password manager </span>
                  </h2>
                  <div  className='text-sm ml-[4vw]'>
                  Your go-to password manager, crafting strong, unique passwords effortlessly, keeping your digital life secure              

                  </div>
              </div>
              <div className="left-right z-10 p-5 absolute right-7  w-[10vh] item-center   ">
                         <a className=' cursor-pointer' target='_blank' href="https://lockboxbyaman.netlify.app/">  <img className='w-12   object-cover h-6 z-10 ml-[80%] -rotate-45 justify-end' src="/images/arrow1.png" alt="" /></a>
              </div>


              <img  src="./images/passmanager.jpg" className={` proimg z-10 h-[10vh] md:h-[7vw] md:w-[7vw] opacity-0  w-[10vh] object-cover rounded-full absolute`} alt="" />
             <div className="absolute over     w-full h-full "></div>
            </div>
            <div  className={`project group  pr-2 overflow-hidden hover:border-zinc-100  hover:border-t  relative md:pb-10 flex border-t border-zinc-600 }`}>

              <div className='left-left z-10 w-[84%]  py-6 '>

                  <h2 className='text-3xl ml-[4vw]' >
                  Matching Mates  <span className='text-xl capitalize'>  </span>
                  </h2>
                  <div  className='text-sm ml-[4vw]'>
                  This platform brings together individuals from diverse backgrounds, interests, and cultures, providing a unique opportunity to meet new people and discover unexpected connections.
                  </div>
              </div>
              <div className="left-right z-10 p-5 absolute right-7  w-[10vh] item-center   ">
                         <a target='_blank' href="https://matchinmates.netlify.app/">  <img className='w-12   object-cover h-6 z-10 ml-[80%] -rotate-45 justify-end' src="/images/arrow1.png" alt="" /></a>
              </div>


              <img  src="./images/machingmates.png" className={` proimg z-10 h-[10vh] md:h-[7vw] md:w-[7vw] opacity-0  w-[10vh] object-cover rounded-full absolute`} alt="" />
             <div className="absolute over     w-full h-full "></div>
            </div>
            <div  className={`project group  pr-2 overflow-hidden hover:border-zinc-100  hover:border-t  relative md:pb-10 flex border-t border-zinc-600 }`}>

              <div className='left-left z-10 w-[84%] py-6 '>

                  <h2 className='text-3xl italic ml-[4vw]' >
                  Chat App  <span className='text-xl capitalize'> - socket.io </span>
                  </h2>
                  <div  className='text-sm ml-[4vw]'>
                  A chat application, making secure, unique authentic effortlessly, keeping your digital chat secure              

                  </div>
              </div>
              <div className="left-right z-10 p-5 absolute right-7  w-[10vh] item-center   ">
                         <a target="_blank" href="https://chatapplication.zeabur.app/login">  <img className='w-12   object-cover h-6 z-10 ml-[80%] -rotate-45 justify-end' src="/images/arrow1.png" alt="" /></a>
              </div>


              <img  src="./images/chatapp.png" className={` proimg z-10 h-[10vh] md:h-[7vw] md:w-[7vw] opacity-0  w-[10vh] object-cover rounded-full absolute`} alt="" />
             <div className="absolute over     w-full h-full "></div>
            </div>
            <div  className={`project group  pr-2 overflow-hidden hover:border-zinc-100  hover:border-t  relative pb-10 flex border-t border-zinc-600 }`}>

              <div className='left-left w-[84%] z-10  py-6 '>

                  <h2 className='text-3xl ml-[4vw]' >
                  Portfolio  <span className='text-xl capitalize'> - Discover my portfolio</span>
                  </h2>
                  <div  className='text-sm ml-[4vw]'>
                 a digital canvas where creativity meets innovation, showcasing my expertise and passion for crafting captivating web experiences."







                  </div>
              </div>
              <div className="left-right z-10 p-5 absolute right-7  w-[10vh] item-center   ">
                         <a href="#">  <img className='w-12   object-cover h-6 z-10 ml-[80%] -rotate-45 justify-end' src="/images/arrow1.png" alt="" /></a>
              </div>


              <img  src="./images/portfolio.png" className={` proimg z-10 h-[10vh] md:h-[7vw] md:w-[7vw] opacity-0  w-[10vh] object-cover rounded-full absolute`} alt="" />
             <div className="absolute over     w-full h-full "></div>
            </div>


          


          </div>

          <div id="right" className=' h-[90vh]  md:w-[35%] p-10 gap-[10%] flex flex-col items-start ' >
                      <div className=' text-6xl'>Have a project in mind?
                      <span className='text-4xl'><br />
                        Let's collaborate and make it a reality together!
                        </span> 
                        </div> 
                       <a  className='bg-[#CDEA68] w-36 h-36 mt-10 py-8 text-[1.2rem] font-medium italic text-zinc-900 flex flex-col items-start justify-between  rounded-full' href="#contact">
                        <span className=' w-full pr-6 justify-end text-right'>
                        <img className='w-7 h-7 ml-[80%] -rotate-45 justify-end' src="/images/arrow.png" alt="" />
                        </span>
                        <span className='text-left pl-6'>
                        LET`s <br /> TALK
                        </span>
                        </a>
          </div>

      </div>










    {/* <div id='projects' className="projects w-full   ">
        <div className="projects px-10 w-full py-10 border-b-2 border-zinc-100">
            <h1 className='text-6xl italic '>
                Projects
             </h1>

        </div>

        <section class=" body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap items-center justify-center  md:gap-10 lg:mx-28  -m-4 ">
      <div class="p-4  lg:w-[35%]  sm:w-1/2 w-full">
        <div class="border-2 border-zinc-100  rounded-lg transform transition duration-500 hover:scale-110">
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/codergif.gif" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium  mb-1">MERN Stack</h2>
            <h1 class="title-font text-2xl font-medium  mb-3">LockBox </h1>
            <p class="leading-relaxed mb-3">
            Your go-to password manager, crafting strong, unique passwords effortlessly, keeping your digital life secure                </p>
            <div class="flex items-center  flex-wrap ">
              <a class="text-zinc-900 font-semibold cursor-pointer bg-zinc-100  px-4 py-3 rounded-full inline-flex items-center md:mb-2 lg:mb-0">Live Link
              <lord-icon
    src="https://cdn.lordicon.com/jdsvypqr.json"
    
    trigger="hover"
    delay="1500"
    state="in-reveal"
    colors={{primary:'#000000',secondary:'#08a88a'}}
    style={{width:'25px',height:'25px'}}>
</lord-icon>
              </a>

              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                   <img className='w-10 rounded-full' src="/images/gitani.gif" alt="gggg" />
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="p-4  lg:w-[35%]  sm:w-1/2 w-full">
        <div class="border-2 border-zinc-100  rounded-lg transform transition duration-500 hover:scale-110">
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/codergif.gif" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium  mb-1">MERN Stack</h2>
            <h1 class="title-font text-2xl font-medium  mb-3">LockBox </h1>
            <p class="leading-relaxed mb-3">
            Your go-to password manager, crafting strong, unique passwords effortlessly, keeping your digital life secure                </p>
            <div class="flex items-center  flex-wrap ">
              <a class="text-zinc-900 font-semibold cursor-pointer bg-zinc-100  px-4 py-3 rounded-full inline-flex items-center md:mb-2 lg:mb-0">Live Link
              <lord-icon
    src="https://cdn.lordicon.com/jdsvypqr.json"
    
    trigger="hover"
    delay="1500"
    state="in-reveal"
    colors={{primary:'#000000',secondary:'#08a88a'}}
    style={{width:'25px',height:'25px'}}>
</lord-icon>
              </a>

              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                   <img className='w-10 rounded-full' src="/images/gitani.gif" alt="gggg" />
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="p-4  lg:w-[35%]  sm:w-1/2 w-full">
        <div class="border-2 border-zinc-100  rounded-lg transform transition duration-500 hover:scale-110">
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/codergif.gif" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium  mb-1">MERN Stack</h2>
            <h1 class="title-font text-2xl font-medium  mb-3">LockBox </h1>
            <p class="leading-relaxed mb-3">
            Your go-to password manager, crafting strong, unique passwords effortlessly, keeping your digital life secure                </p>
            <div class="flex items-center  flex-wrap ">
              <a class="text-zinc-900 font-semibold cursor-pointer bg-zinc-100  px-4 py-3 rounded-full inline-flex items-center md:mb-2 lg:mb-0">Live Link
              <lord-icon
    src="https://cdn.lordicon.com/jdsvypqr.json"
    
    trigger="hover"
    delay="1500"
    state="in-reveal"
    colors={{primary:'#000000',secondary:'#08a88a'}}
    style={{width:'25px',height:'25px'}}>
</lord-icon>
              </a>

              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                   <img className='w-10 rounded-full' src="/images/gitani.gif" alt="gggg" />
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="p-4  lg:w-[35%]  sm:w-1/2 w-full">
        <div class="border-2 border-zinc-100  rounded-lg transform transition duration-500 hover:scale-110">
        <div class="h-full  rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/codergif.gif" alt="blog"/>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium  mb-1">MERN Stack</h2>
            <h1 class="title-font text-2xl font-medium  mb-3">LockBox </h1>
            <p class="leading-relaxed mb-3">
            Your go-to password manager, crafting strong, unique passwords effortlessly, keeping your digital life secure                </p>
            <div class="flex items-center  flex-wrap ">
              <a class="text-zinc-900 font-semibold cursor-pointer bg-zinc-100  px-4 py-3 rounded-full inline-flex items-center md:mb-2 lg:mb-0">Live Link
              <lord-icon
    src="https://cdn.lordicon.com/jdsvypqr.json"
    
    trigger="hover"
    delay="1500"
    state="in-reveal"
    colors={{primary:'#000000',secondary:'#08a88a'}}
    style={{width:'25px',height:'25px'}}>
</lord-icon>
              </a>

              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-200">
                   <img className='w-10 rounded-full' src="/images/gitani.gif" alt="gggg" />
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  </div>
</section>



    </div> */}
    
    </div>
  )
}

export default Projects