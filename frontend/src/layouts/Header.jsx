import { useState } from "react";
import Logo from "../components/Logo";
import NavBar from "./NavBar";
import MenuButton from "../components/MenuButton";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenu, setMenu] = useState(false);

  return (
    <motion.div
      className="w-full h-26 flex flex-col fixed md:bg-transparent backdrop-blur-xl z-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
    >
      <div className="w-full h-28 flex items-center justify-between lg:justify-start relative">
        <a href="/">
          <code className="block left-6 top-5 text-3xl lg:text-4xl text-white font-bold absolute"><span className="text-[#FF7F50]">E</span>ric<br/><span className="text-[#0099FF] text-right">J</span>ohn</code>
          {/* <Logo size={50} className="m-5 bg-transparent" description="John Eric" /> */}
        </a>
        <NavBar
          className="hidden lg:flex justify-center items-center gap-12 mx-auto"
          linkClass={
            (isActive) =>
              isActive ? "text-lg pt-8 text-white" : "text-lg text-white hover:pt-8 keypad-motion"
          }
        />
        <MenuButton
          onClick={() => setMenu(!isMenu)}
          className="size-12 mx-6 flex flex-col cursor-pointer gap-2 lg:hidden z-10 relative"
          isOpen={isMenu}
        />
      </div>
      <NavBar
        className={`transition-[transform] ease-out ${isMenu ? "translate-x-[0%]" : "-translate-x-[100%]"} duration-1000 bg-black/90 flex flex-col w-full h-screen top-0 items-center justify-evenly py-12 absolute`}
        linkClass={
          (isActive) =>
            isActive ? "text-3xl text-white pr-10" : "w-60 text-right hover:pr-10 text-3xl text-white keypad-motion"
        }
        linkOnClick={() => setMenu(false)}
      />
    </motion.div>
  )
}

export default Header;
