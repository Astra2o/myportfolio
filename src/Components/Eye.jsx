import React, { useEffect, useState } from 'react'

function Eye() {

    const [rotate, setRotate] = useState(0)
    useEffect(() => {
     window.addEventListener('mousemove',(e)=>{
        

      let mouseX=  e.clientX;
      let mousey=  e.clientY;

      let deltaX= mouseX - window.innerWidth/2;
      let deltaY =mousey - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);

      setRotate(angle-180)
        
        
     })

    })
    
  return (
    <div  className='eyes w-full  relative items-center justify-center bg-zinc-400 flex h-[120vh] overflow-hidden'>
      
      <div  data-scroll data-scroll-section data-scroll-speed='-.6' className='lg:w-[80%] relative  lg:h-[80%]  w-96 h-64  bg-cover bg-center bg-[url("/images/monitorbg.png")]'>
              {/* <div className='w-full h-full absolute'><img className='w-full h-full' src="/images/monitorbg.png" alt="" /></div> */}
                <div  className="absolute flex gap-10 z-0  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[65%] ">
                    <div className="w-[25vw] md:w-[15vw] md:h-[15vw] border flex items-center justify-center border-zinc-900   h-[25vw] bg-zinc-100  rounded-full">
                        <div className="w-2/3 border border-zinc-900 relative   h-2/3 bg-zinc-900  rounded-full">
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[35%] ">
                                
                            <div className="w-[35%] h-[100%] border border-zinc-900    bg-zinc-100  rounded-full">
                            </div>

                             </div>
                         </div>
                    </div>
                    <div className="w-[25vw] md:w-[15vw] md:h-[15vw] border flex items-center justify-center border-zinc-900   h-[25vw] bg-zinc-100  rounded-full">
                        <div className="w-2/3 border border-zinc-900 relative   h-2/3 bg-zinc-900  rounded-full">
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[35%] ">
                                
                            <div className="w-[35%] h-[100%] border border-zinc-900    bg-zinc-100  rounded-full">
                            </div>

                             </div>
                         </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default Eye