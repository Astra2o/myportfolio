 import { motion } from 'framer-motion'
import React from 'react'
 
 function Marquee() {

    


    const skillImg =['SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB']
    const skillImg1 =['REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY']
    const skillImg2 =['JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND','JAVASCRIPT','MONGODB','SHOPIFY','BOOTSTRAP','WORDPRESS','SAAS','HTML5','JQUERY','REACT','NPM','TYPESCRIPT','REDUX','TAILWIND']
   return (
     <div data-scroll data-scroll-section data-scroll-speed='-.6' className='w-full rounded-t-3xl h-[60vh] lg:h-[56vh] flex flex-col lg:flex-row py-16 px-5 bg-[#0e4d44]' >
     {/* <h2 className="Skills capitalize italic lg:mt-20 mb-5  lg:w-[30%] text-center lg:text-9xl text-3xl">
        skills
     </h2> */}
     <div className="marque overflow-hidden py-2  border-t-2 border-b-2 flex  flex-col border-zinc-300">
        <motion.div  initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear' ,repeat:Infinity ,duration:10}}  className='flex whitespace-nowrap pr-20 '>
            {skillImg.map((item,index)=>(<img key={index} className='w-16 h-16 md:w-20 md:h-20' src={`/images/${item}.png`} alt="f" />))}
        </motion.div>

        <motion.div  initial={{x:'-100%'}} animate={{x:'0'}} transition={{ease:'linear' ,repeat:Infinity ,duration:10}}  className='flex whitespace-nowrap pr-20 '>
            {skillImg1.map((item,index)=>(<img  key={index} className='w-12 h-12 md:w-20 md:h-20' src={`/images/${item}.png`} alt="f" />))}
        </motion.div>

        <motion.div  initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear' ,repeat:Infinity ,duration:10}}  className='flex whitespace-nowrap pr-20 '>
            {skillImg2.map((item,index)=>(<img key={index} className='w-16 h-16 md:w-20 md:h-20' src={`/images/${item}.png`} alt="f" />))}
        </motion.div>
     </div>
     

     </div>
   )
 }
 
 export default Marquee
 
 
 
 