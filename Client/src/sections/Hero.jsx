import BACKGROUND from '../assets/images/3D.png';

const Hero = () => {

  return (
    <section id="home" style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className="h-screen w-full bg-[#333333] flex flex-col items-center justify-end gap-4 relative"
    >
      <h1 className="text-9xl font-bold text-center text-slate-300 drop-shadow-xl">ERIC JOHN</h1>
      <p className="text-2xl text-center text-slate-200 font-bold backdrop-blur-xl">SOFTWARE ENGINEER, BACKEND & WEB DEVELOPER</p>
      <div
        className='border-2 border-white w-7 h-12 rounded-full hover:cursor-pointer flex flex-col items-center py-1 absolute bottom-8'
        onClick={() => {document.location.href = '#about'}}
      >
        <div 
          className='w-2 h-4 bg-white rounded-full animate-scroll'
        />
      </div>
      <div className="fixed right-3 top-1/4 bg-gray-800 p-1 rounded-full flex items-center justify-start w-14 overflow-x-hidden cursor-pointer">
        <span
          className="text-2xl hover:bg-gray-700 p-2 rounded-full"
	>
	⭐
	</span>
	<span className="text-white text-2xl">Star</span>
      </div>
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
