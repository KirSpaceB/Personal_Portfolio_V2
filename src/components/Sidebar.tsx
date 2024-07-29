import { useState, useEffect } from "react";
import {motion} from "framer-motion"

export default function Sidebar() {
  //This might be a global state?
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: {
      width:"180px",
      transition: {
        type:"tween",
        stiffness:100,
      },
      
    },
    closed: {
      width:"0px",
      transition: {
        type:"tween",
        stiffness:100,
      }
    }
  }

  const buttonVariants = {
    open: {
      x:"180px",
      transition: { duration: 0.3 },
    },
    closed: {
      x:"0px",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="relative h-screen flex flex-row z-50">
        {isOpen && (
          <div
            className="absolute inset-0 bg-black opacity-50 z-20 h-screen w-screen lg:opacity-0"
            onClick={toggleNav}
          ></div>
        )}
          <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            className="absolute left-0 top-0 bg-[#171717] h-screen overflow-hidden z-30 lg:relative lg:z-0"
          >
            <div className="flex flex-col justify-start m-4 space-y-4 text-white">
              <div>Projects</div>
              <div>Resume</div>
              <div>Projects</div>
            </div>
        </motion.nav>
        <motion.button
            className="absolute top-[50vh] left-[1vw] w-[12px] h-[50px] bg-black lg:!left-[1vw] z-40"
            onClick={toggleNav}
            animate={isOpen ? "open" : "closed"}
            variants={buttonVariants}
        >
        </motion.button>
      </div>
    </>
  )
}
