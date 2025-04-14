const MenuButton = ( { onClick, className } ) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <div className="bg-gray-400 h-1 rounded"></div>
      <div className="bg-gray-400 h-1 rounded"></div>
      <div className="bg-gray-400 h-1 rounded"></div>
    </button>
  )
}

export default MenuButton;
