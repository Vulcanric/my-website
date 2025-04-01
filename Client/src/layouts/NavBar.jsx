import NavLink from "../components/NavLink"

const NavBar = ( {className, childClass} ) => {
    return (
      <div className={className}>
        <NavLink label="About Me" to="#about" className={childClass} />
        <NavLink label="Services" to="#services" className={childClass} />
        <NavLink label="Work" to="#work" className={childClass} />
        <NavLink label="Testimonials" to="#testimonials" className={childClass} />
        <NavLink label="Contact" to="#contact" className={childClass} />
      </div>
    )
}
export default NavBar