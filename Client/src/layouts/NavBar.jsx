// import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavLink from "../components/NavLink";

const NavBar = ( {className, linkClass, linkOnClick} ) => {
  const [activeId, setActiveId] = useState(null);

  const navItems = [
    "home",
    "about",
    "services",
    "work",
    "testimonials",
    "contact",
  ]

  function handleLinkClick(id) {
    setActiveId(id);
    if (linkOnClick) {
      linkOnClick()
    }
  }

  return (
    <div className={className}>
      {
        navItems.map((item, id) => {
          return (
            <NavLink
              key={id}
              to={`#${item}`}
              isActive={activeId === id}
              onClick={() => handleLinkClick(id)}
              className={linkClass}
            >
              <code className="block text-right text-sm">{'0' + (id + 1)}</code>
              <code>/ </code>{item}
            </NavLink>
          )
        })
      }
    </div>
  )
}
export default NavBar;
