
const Hero = () => {

  return (
    <section id="home"
      className="h-screen w-full bg-left-top bg-[url('/3D-mobile1.png')] md:bg-[url('/3D-desktop.png')] bg-no-repeat bg-cover flex flex-col items-center justify-end gap-4 relative"
    >
      <h1 className="text-9xl font-bold text-center text-slate-200 drop-shadow-xl">ERIC JOHN</h1>
      <p className="text-2xl text-center text-slate-200 font-bold backdrop-blur-xl">SOFTWARE ENGINEER, BACKEND & WEB DEVELOPER</p>
      <div
        className='border-2 border-white w-7 h-12 rounded-full hover:cursor-pointer flex flex-col items-center py-1 absolute bottom-8'
        onClick={() => {document.location.href = '#about'}}
      >
        <div 
          className='w-2 h-4 bg-white rounded-full animate-scroll'
        />
      </div>
      <a
        target='_blank'
        href="https://github.com/vulcanric/my-website/"
        className="fixed right-0 top-1/4 z-20"
      >
        <div
          className="w-11 hover:w-24 overflow-x-hidden transition-[width] ease-in-out duration-[0.4s] flex gap-3 pl-3 pr-5 py-2 bg-gray-800 text-white font-bold rounded-l-lg"
        >
	        <span>⭐</span>STAR
        </div>
      </a>
      <br />
      <div className='flex gap-10 mb-36'>
        <a href="https://x.com/JohnEri89510617">
          <i className="fa-brands fa-x-twitter fa-xl text-white" />
        </a>
        <a href="http://github.com/vulcanric">
          <i className="fa-brands fa-github fa-xl text-white" />
        </a>
        <a href="http://www.linkedin.com/in/johneric1">
          <i className="fa-brands fa-linkedin fa-xl text-white" />
        </a>
      </div>
      <br />
    </section>
  )
}
export default Hero;
