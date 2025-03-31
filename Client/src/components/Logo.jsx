import me from "../assets/images/me.jpg";

const Logo = ( {className, size} ) => {

  return (
    <a href="#home" >
      <div className={className}>
        <img
          src={me}
          width={size}
          alt="My logo"
          />
      </div>
    </a>
  )
}

export default Logo