// import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavLink from "../components/NavLink";

const NavBar = ( {className, tabClass, items} ) => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className={className}>
      {
        items.map((item) => {
          return (
            <NavLink
              key={item.id}
              id={item.id}
              to={item.link}
              isActive={activeId === item.id}
              onClick={() => setActiveId(item.id)}
              className={tabClass}
            >
              {item.label}
            </NavLink>
          )
        })
      }
    </div>
  )
}
export default NavBar
