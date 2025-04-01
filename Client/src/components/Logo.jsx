import me from "../assets/images/me.jpg";

const Logo = (props) => {

  if (props.to) {
    return (
      <a href={props.to} >
        <div className={props.className}>
          <img
            src={me}
            width={props.size}
            alt={props.description}
            />
        </div>
      </a>
    )
  }

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
