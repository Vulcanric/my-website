import React, { useState } from "react";
import Logo from "../components/Logo"
import NavBar from "./NavBar"

const Header = () => {

  return (
    <div className="w-full flex items-center border justify-between" >
      <Logo size="50" className="border" />
      <NavBar className="border w-full flex justify-center items-center gap-9" />
    </div>
  )
}

export default Header