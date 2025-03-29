import me from "../assets/images/me.jpg";

const Logo = ( {className, size} ) => {

  return (
    <div className={className}>
      <img
        src={me}
        width={size}
        alt="My logo"
      />
    </div>
  )
}

export default Logo