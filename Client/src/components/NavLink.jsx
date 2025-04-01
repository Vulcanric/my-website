
const NavLink = ({ to, label, className }) => {
    return (
        <a href={to} className={className} >{label}</a>
    )
}

export default NavLink
