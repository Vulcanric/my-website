import StackIcon from "tech-stack-icons";


const TechChip = ({ name }) => {
  return (
    <div className="w-10 h-5 rounded-lg">
      <StackIcon
        name={name
          .toLowerCase()
          .replace('.', '')
          .replace(' ', '')
        }
      />
      <p>{name}</p>
    </div>
  )
}

export default TechChip;
