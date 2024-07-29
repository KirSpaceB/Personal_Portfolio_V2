import { useState } from "react";
import {motion} from "framer-motion"
import MessageIcon from "./MessageIcon";

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
          // Overlay
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
            <div className="flex flex-col space-y-4 text-white">
              {/* As long as there is an overlay hover is not being read */}
              <motion.button
                className="flex flex-row ml-4 mt-4 items-center space-x-2"
                whileHover={{ backgroundColor: "#F56565" }} // Tailwind CSS bg-red-500 color code
                style={{ padding: "0.5rem", borderRadius: "0.25rem" }}
                onClick={() => console.log("Hello World")}
              >
                <MessageIcon classname="w-4 h-4" />
                <p className="mb-0.5">Projects</p>
              </motion.button>
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
