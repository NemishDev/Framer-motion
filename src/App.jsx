import {animate, delay, motion, stagger} from "framer-motion"
import React from 'react'

const App =() =>{

  const parentVariants = {
     visible:{opacity:1, transition:{
       staggerChildren: 0.2,
      delayChildren:0.5
     }},
     hidden:{opacity:0 } 
  }

  const childVariants={
    hidden:{y:100, opacity:0},
    visible:{y:0, opacity:1}
  }
  const arr=[10,20,30,50,20,50,20,30,40,40]
  return(
    <div className="bg-[#111] p-10 h-screen ">
     <motion.div 
     className="h-full flex flex-wrap items-center justify-center text-center bg-slate-900  p-10"
     variants={parentVariants}
     initial="hidden"
     animate="visible"
     transition={{duration:2,delay:1}}
     >
       {arr.map((elem,idx)=>{
        return  <motion.div variants={childVariants} key={idx} className=" flex justify-center items-center font-bold  bg-red-500 m-4 rounded-2xl h-52 w-52">
           child{idx +1}
       </motion.div>
       })}
     </motion.div>
    </div>
  )
}
export default App;
