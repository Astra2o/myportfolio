import React from 'react'
import {motion} from 'framer-motion'
function LandingPage() {

  
  return (



    
    // <div className='w-full flex flex-col flex-wrap h-screen bg-zinc-900 pt-2'>
        <section data-scroll data-scroll-section data-scroll-speed='.2' id='home' class="text-zinc-200 bg-zinc-900 h-screen  body-font">
  <div class="container   mx-auto flex mb-8  md:pt-2  lg:pt-6 lg:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pr-1 flex flex-col md:items-start md:text-left mb-1 md:mb-0 items-center text-center">
    <div className="textstracture   ">
            <div className="masker  font-bold text-4xl">
                <h1 className=' italic leading-none'>
                   Hello I'm <span></span> 
                </h1>
            </div>
            <div className="masker w-96 flex pl-6 font-bold text-6xl">
           <motion.div 
           initial={{width:0}} 
           animate={{width:'3.7rem' }} 
            transition={{ease:[0.76,0,0.24,1] ,duration:1}}  >
             <img className=' w-[60px]' src="/images/webpc.png" alt="" />
            </motion.div>
                <h1 className=' text-[#CDEA68] leading-none'>
                      Aman Pal
                </h1>
            </div>
            <div className="masker italic pl-6 font-bold text-2xl">
                <h1 className=' leading-9'>
                     <span></span> A Web Developer - <span className=' inline-block md:inline text-xl'>I build things for web</span>
                </h1>
            </div>
        </div>
      {/* <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      <div class="flex mt-10 mx-auto justify-center">
        <a  href="./resumeaman.pdf" download="resume-aman.pdf" class="inline-flex text-zinc-900 bg-[#CDEA68]  py-2 px-6 focus:outline hover:bg-zinc-900 border  hover:text-zinc-100 rounded text-lg">Download CV</a>
        <a href='#contact' class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#CDEA68] rounded text-lg">Contact</a>
      </div>
    </div>
    <div class="lg:max-w-xl lg:w-full md:w-1/2 md:mr-24 w-5/6">
      <img class="object-cover  object-center rounded" alt="hero" src="/images/imgmy.png"/>
    </div>
  </div>
  <div className="border-t-[1px] px-4 md:px-20 pt-4 flex-col md:flex-row flex justify-between items-center border-zinc-200 ">
    {['Front-End Developer','Back-End Developer','SEO'].map((item,index)=>(
    <p className='text-md font-light  '>
         {item}
    </p>))}
</div>


</section>
      
  )
}

export default LandingPage