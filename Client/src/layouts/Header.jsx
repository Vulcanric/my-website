import React, { useState } from "react";
import Logo from "../components/Logo";
import NavBar from "./NavBar";

const Header = () => {
  const [contextMenu, setContextMenu] = useState(false);

  const MenuButton = ( { onClick, className } ) => {
    return (
      <span
        className={className}
        onClick={onClick}
      >
        <div className="bg-black h-1 rounded"></div>
        <div className="bg-black h-1 rounded"></div>
        <div className="bg-black h-1 rounded"></div>
      </span>
    )
  }

  return (
    <div className="w-full h-20 flex flex-col items-center border justify-center fixed" >
      <div className="w-full h-full flex items-center sm:justify-between md:justify-start border bg-white">
        <Logo size="50" className="m-5" to="#home" description="John Eric" />
        <NavBar
          className="sm:hidden md:flex lg:flex justify-center items-center gap-12 mx-auto"
          childClass=""
        />
        <MenuButton onClick={() => setContextMenu(!contextMenu)} className="w-8 h-6 mx-6 flex flex-col cursor-pointer justify-between md:hidden lg:hidden z-10" />
      </div>
      {
        contextMenu && (
          <NavBar
            className="bg-white flex flex-col border w-full h-screen top-0 items-center gap-9 py-12 absolute"
            childClass="text-xl"
          />
        )
      }
    </div>
  )
}

export default Header