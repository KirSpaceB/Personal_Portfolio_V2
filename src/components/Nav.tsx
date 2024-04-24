import { useState } from "react";
import {motion} from "framer-motion"

export default function Nav() {
  //This might be a global state?
  const [isOpen, setIsOpen] = useState(true);
  const toggleNav = () => {
    setIsOpen(!isOpen);
};

  const sidebarVariants = {
    open: {
      width: window.innerWidth > 768 ? '180px' : '144px', // Adjust as per your breakpoints

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
      x: 0, // Adjust x position to match the nav's movement
      transition: { duration: 0.3 },
    },
    closed: {
      x: -180, // Button is in its default position
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <div className="h-screen flex flex-row">
          <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={sidebarVariants}
              className="bg-purple-500 h-screen overflow-hidden"
          >
            <div className="flex flex-col justify-start m-4 space-y-4">
              <div>Projects</div>
              <div>Resume</div>
              <div>Projects</div>
            </div>
          </motion.nav>

          <motion.button
              className="justify-center lg:absolute lg:top-[50vh] lg:left-[9.5vw] items-center w-1 h-12 bg-black"
              onClick={toggleNav}
              animate={isOpen ? "open" : "closed"}
              variants={buttonVariants}
          >
              {/* You can add an icon or text inside the button for better UX */}
          </motion.button>
      </div>
    </>
  )
}
