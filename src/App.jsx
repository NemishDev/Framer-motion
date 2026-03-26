import { div } from 'framer-motion/client'
import {AnimatePresence, motion} from 'framer-motion'
import React, { useState } from 'react'

const App =() =>{
  const[btnClicked, setBtnClicked] = useState(false)

  const btnClicking=() =>{
    setBtnClicked(!btnClicked);
    console.log(btnClicked);
  }
  return(
 <div className='bg-[#111] h-screen p-10'>
 <AnimatePresence>
   <motion.div
  layout
  className='h-60 w-60 rounded-2xl bg-red-500'
    style={{
      height:btnClicked?500:100,
      width:btnClicked?500:100
    }}
    >
  </motion.div>
  <button onClick={btnClicking} className='bg-green-700 mt-4 active:scale-95 font-bold rounded px-6 py-2'>click</button>
 </AnimatePresence>
 </div>
  )
}
export default App;