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
      <div className="h-screen flex flex-row">
          <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={sidebarVariants}
              className="bg-purple-500 h-screen overflow-hidden relative z-10"
          >
            <div className="flex flex-col justify-start m-4 space-y-4">
              <div>Projects</div>
              <div>Resume</div>
              <div>Projects</div>
            </div>
        </motion.nav>
        <motion.button
            className="absolute top-[50vh] left-[1vw] w-[12px] h-[50px] bg-black lg:!left-[1vw]"
            onClick={toggleNav}
            animate={isOpen ? "open" : "closed"}
            variants={buttonVariants}
        >
        </motion.button>
      </div>
    </>
  )
}
