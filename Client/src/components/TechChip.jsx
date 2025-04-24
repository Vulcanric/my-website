import StackIcon from "tech-stack-icons";


const TechChip = ({ name, key }) => {
  return (
    <div
      key={key}
      className="w-30 h-fit flex px-3 py-2 gap-2 border rounded-full"
    >
      <StackIcon
        name={name
          .toLowerCase()
          .replace('.', '')
          .replace(' ', '')
        }
        className="w-5"
      />
      <p className="text-sm">{name}</p>
    </div>
  )
}

export default TechChip;
