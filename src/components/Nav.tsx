import { useState } from "react";
export default function Nav() {
    //This might be a global state?
    const [isOpen, setIsOpen] = useState(true);
    const CloseNavHandler = () => {
      if(isOpen) {
        setIsOpen(false);
      } else {
        setIsOpen(true)
      }
    }
  return (
    <>
      <div className="h-screen w-fit flex flex-row ">

        {isOpen &&
          <nav className="bg-red-500 h-screen w-[244px]">
            <div>Projects</div>
          </nav>
        }

        <button className="justify-center items-center w-12 h-12 bg-black" onClick={CloseNavHandler}>

        </button>

      </div>
    </>

  )
}
