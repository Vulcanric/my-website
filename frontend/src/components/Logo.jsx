import me from "../assets/me.jpg";

const Logo = (props) => {

  return (
    <div className={props.className}>
      <img
        loading="lazy"
        src={me}
        width={props.size}
        alt={props.description}
        // style={{borderRadius: "100%",}}
      />
    </div>
  )
}

Logo.props = {
  description: "No description",
}

export default Logo
