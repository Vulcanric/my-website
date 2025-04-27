import me from "../assets/images/me.png";

const Logo = (props) => {

  return (
    <div className={props.className}>
      <img
        loading="lazy"
        src={me}
        width={props.size}
        alt={props.description}
        style={{borderRadius: "50%",}}
      />
    </div>
  )
}

Logo.props = {
  description: "No description",
}

export default Logo
