const AppScreen = ({ picture, linkTo, alt, width, height }) => {

  return (
    <div className="relative rounded-2xl border-2 overflow-hidden cursor-pointer" style={{width: `${width}px`, height: `${height}px`}}>
      <img src={picture} alt={alt} className=" w-full h-full" />
      <a
        href={linkTo}
        target="blank_"
        className="absolute top-0 left-0 w-full
        h-full hover:bg-black opacity-50 transition-opacity
        group-hover:block rounded-2xl"
      >
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24" fill="none"
        stroke="#ffffff" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round"
        className="absolute top-5 right-6 group-hover:block hidden cursor-pointer"
      >
        <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    </div>
  )
}
export default AppScreen;
