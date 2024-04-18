import React from 'react'
import '../App.scss'

function About() {
  return (
    <div  id='skills' className=' w-full py-10  lg:px-20 bg-[#CDEA68] text-zinc-900 text-xl rounded-t-3xl'>
        <h1 className='text-6xl px-10 py-10 italic '>
            About 
        </h1>
        <div className="  px-10 ">
        Hey there! 👋 I'm  Aman Pal, a passionate web developer with a love for crafting clean, functional, and user-friendly websites. With 1 years of experience in the industry, I've had the opportunity to work on a variety of projects, ranging from simple landing pages to complex web applications.


        </div>

        <div className="w-full flex flex-col   border-t-2 my-10  border-[#a1b562]" >
                        <h1 className=' text-5xl  italic  pt-10 px-10'>
                            My skills
                        </h1>


            <div className=" italic  justify-between  flex flex-col lg:flex-row py-10  px-10">
                    <div className='md:w-[40%] grid grid-cols-2 gap-4  text-sm gap-y-10 justify-items-center py-12 items-center'>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/html.png" alt="" />
                        Html
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/css.png" alt="" />
                        CSS
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/wordpress.png" alt="" />
                        wordpress
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/react2.png" alt="" />
                        reactjs
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                                          
                    </div>
                    <div className='md:w-[40%] grid grid-cols-2 gap-4  text-sm gap-y-10 justify-items-center py-12 items-center'>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/mongo.png" alt="" />
                        mongodb
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/webflow.png" alt="" />
                        webflow
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/next.png" alt="" />
                        nextjs
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                        <div className='button text-center'>
                            
                        <img className=' h-24 w-24' src="/images/node.png" alt="" />
                        node
                        <div class="button__horizontal"></div>
                         <div class="button__vertical"></div>
                        </div>
                                          
                    </div>
                   
             </div>

                   

        </div>



    </div>
  )
}

export default About