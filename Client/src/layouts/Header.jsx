import React, { useState } from "react";
import Logo from "../components/Logo";
import NavBar from "./NavBar";
import MenuButton from "../components/MenuButton";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {label: "About me", link: "#about", id: 1},
    {label: "Services", link: "#services", id: 2},
    {label: "My work", link: "#work", id: 3},
    {label: "Testimonials", link: "#testimonials", id: 4},
    {label: "Contact me", link: "#contact", id: 5}
  ]

  return (
    <div className="w-full h-20 flex flex-col items-center border justify-center fixed md:bg-transparent z-10" >
      <div className="w-full h-full flex items-center sm:justify-between md:justify-start border bg-white bg-opacity-75">
        <a href="#home">
          <Logo size={50} className="m-5" description="John Eric" />
        </a>
        <NavBar
          className="sm:hidden md:flex lg:flex justify-center items-center gap-12 mx-auto"
          linkClass={
            (isActive) =>
              isActive ? "text-lg font-thin underline" : "text-lg font-thin hover:underline"
          }
          items={navItems}
        />
        <MenuButton
          onClick={() => setMenu(!menu)}
          className="w-8 h-6 mx-6 flex flex-col cursor-pointer justify-between md:hidden lg:hidden z-10"
        />
      </div>
      {
        menu && (
          <NavBar
            className="bg-white flex flex-col border w-full h-screen top-0 items-center justify-evenly py-12 absolute"
            linkClass={
              (isActive) =>
                isActive ? "text-3xl underline" : "text-3xl hover:underline"
            }
            linkOnClick={() => setMenu(false)}
            items={navItems}
          />
        )
      }
    </div>
  )
}

export default Header;
