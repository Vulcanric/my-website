const NavLink = (props) => {

    return (
        <a
          href={props.to}
          className={props.className(props.isActive)}
          onClick={props.onClick}
        >
          { props.children }
        </a>
    )
}
export default NavLink;
