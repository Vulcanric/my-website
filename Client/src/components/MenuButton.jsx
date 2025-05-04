const MenuButton = ( { onClick, className, isOpen } ) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span className={`w-8 transition-[transform] duration-300 ease-linear ${isOpen && "rotate-45 translate-y-2"} bg-gray-400 min-h-1 rounded`}></span>
      <span className={`w-8 transition-[transform] duration-300 ease-linear ${isOpen && "-rotate-[45deg] -translate-y-1"} bg-gray-400 min-h-1 rounded`}></span>
      <span className={`w-8 transition-[transform] duration-300 ease-linear ${isOpen ? "scale-x-0" : "scale-x-100"} bg-gray-400 min-h-1 rounded`}></span>
    </button>
  )
}

export default MenuButton;
