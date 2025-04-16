// import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavLink from "../components/NavLink";

const NavBar = ( {className, linkClass, linkOnClick, items} ) => {
  const [activeId, setActiveId] = useState(null);

  function handleLinkClick(id) {
    setActiveId(id);
    if (linkOnClick) {
      linkOnClick()
    }
  }

  return (
    <div className={className}>
      {
        items.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              isActive={activeId === item.id}
              onClick={() => handleLinkClick(item.id)}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          )
        })
      }
    </div>
  )
}
export default NavBar;
