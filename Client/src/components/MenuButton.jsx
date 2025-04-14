const MenuButton = ( { onClick, className } ) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span className="bg-gray-400 h-1 rounded"></span>
      <span className="bg-gray-400 h-1 rounded"></span>
      <span className="bg-gray-400 h-1 rounded"></span>
    </button>
  )
}

export default MenuButton;
