import React from "react"
import { motion } from "motion/react"
const App =() =>{
  return(
    <div>
  
   <motion.div animate={{x:900}} transition={{duration:3}}  className="box">BOX</motion.div>
    </div>
  )
}
export default App