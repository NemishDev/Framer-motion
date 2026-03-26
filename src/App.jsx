import { motion ,useScroll } from "framer-motion";
import React from "react"

const App = () => {

   const {scrollYProgress}= useScroll()
   console.log(scrollYProgress);
  return (
    <div>
      <motion.div
        className="bg-red-500 h-2 w-full fixed origin-left"
        style={{
          scaleX:scrollYProgress
        }}
        >

        </motion.div>
      <div className="h-screen px-80 p-20 text-center bg-[#111] ">
        <h2 className="font-bold text-4xl font-momo m-5">
          sheryians coding school
        </h2>
        <p className="font-normal text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex? Corporis ea sunt commodi! Provident expedita, maiores dolor hic, eligendi voluptates ipsa corrupti dolorem ex eos excepturi commodi magnam assumenda ea ullam praesentium a quas laudantium magni incidunt fugit possimus! Voluptas voluptatum sint optio, in perspiciatis error autem ad vero quis esse quaerat pariatur, voluptate corrupti aliquid deserunt quia repellendus. Distinctio a omnis ut iusto vitae, harum dolorem quas! Ad enim omnis dolor sint qui perferendis! Eveniet quis rerum quam. Rem enim provident maxime minus nulla quod delectus. Corporis ipsa iusto doloribus assumenda, vel natus molestias quod cum. Ex, minima.
        </p>
      </div>
           <div className="h-screen px-80 p-20 text-center bg-[#111] ">
        <h2 className="font-bold text-4xl font-momo m-5">
          sheryians coding school
        </h2>
        <p className="font-normal text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex? Corporis ea sunt commodi! Provident expedita, maiores dolor hic, eligendi voluptates ipsa corrupti dolorem ex eos excepturi commodi magnam assumenda ea ullam praesentium a quas laudantium magni incidunt fugit possimus! Voluptas voluptatum sint optio, in perspiciatis error autem ad vero quis esse quaerat pariatur, voluptate corrupti aliquid deserunt quia repellendus. Distinctio a omnis ut iusto vitae, harum dolorem quas! Ad enim omnis dolor sint qui perferendis! Eveniet quis rerum quam. Rem enim provident maxime minus nulla quod delectus. Corporis ipsa iusto doloribus assumenda, vel natus molestias quod cum. Ex, minima.
        </p>
      </div>
           <div className="h-screen px-80 p-20 text-center bg-[#111] ">
        <h2 className="font-bold text-4xl font-momo m-5">
          sheryians coding school
        </h2>
        <p className="font-normal text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex? Corporis ea sunt commodi! Provident expedita, maiores dolor hic, eligendi voluptates ipsa corrupti dolorem ex eos excepturi commodi magnam assumenda ea ullam praesentium a quas laudantium magni incidunt fugit possimus! Voluptas voluptatum sint optio, in perspiciatis error autem ad vero quis esse quaerat pariatur, voluptate corrupti aliquid deserunt quia repellendus. Distinctio a omnis ut iusto vitae, harum dolorem quas! Ad enim omnis dolor sint qui perferendis! Eveniet quis rerum quam. Rem enim provident maxime minus nulla quod delectus. Corporis ipsa iusto doloribus assumenda, vel natus molestias quod cum. Ex, minima.
        </p>
      </div>
           <div className="h-screen px-80 p-20 text-center bg-[#111] ">
        <h2 className="font-bold text-4xl font-momo m-5">
          sheryians coding school
        </h2>
        <p className="font-normal text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ex? Corporis ea sunt commodi! Provident expedita, maiores dolor hic, eligendi voluptates ipsa corrupti dolorem ex eos excepturi commodi magnam assumenda ea ullam praesentium a quas laudantium magni incidunt fugit possimus! Voluptas voluptatum sint optio, in perspiciatis error autem ad vero quis esse quaerat pariatur, voluptate corrupti aliquid deserunt quia repellendus. Distinctio a omnis ut iusto vitae, harum dolorem quas! Ad enim omnis dolor sint qui perferendis! Eveniet quis rerum quam. Rem enim provident maxime minus nulla quod delectus. Corporis ipsa iusto doloribus assumenda, vel natus molestias quod cum. Ex, minima.
        </p>
      </div>
    </div>
  )
}

export default App;