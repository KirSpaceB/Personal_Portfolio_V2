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
      width: window.innerWidth > 768 ? '244px' : '144px', // Adjust as per your breakpoints

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

  return (
    <>
      <div className="h-screen flex flex-row">
          <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={sidebarVariants}
              className="bg-red-500 h-screen overflow-hidden "
          >
              <div>Projects</div>
          </motion.nav>

          <button
              className="justify-center items-center w-12 h-12 bg-black"
              onClick={toggleNav}
          >
              {/* You can add an icon or text inside the button for better UX */}
          </button>
      </div>
    </>
  )
}
