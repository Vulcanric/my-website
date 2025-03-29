import NavLink from "../components/NavLink"

const NavBar = ( {className} ) => {
    return (
      <div className={className}>
        <NavLink label="About Me" to="#about" />
        <NavLink label="Services" to="#services" />
        <NavLink label="Work" to="#work" />
        <NavLink label="Testimonials" to="#testimonials" />
        <NavLink label="Contact" to="#contact" />
      </div>
    )
}
export default NavBar