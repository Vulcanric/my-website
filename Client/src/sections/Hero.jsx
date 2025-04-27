import BACKGROUND from '../assets/images/3D.png';

const Hero = () => {

  return (
    <section id="home" style={{
        backgroundImage: `url(${BACKGROUND})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className="h-full w-full flex flex-col items-center justify-end gap-4 relative"
    >
      <h1 className="text-9xl font-bold text-center text-slate-300 drop-shadow-xl">ERIC JOHN</h1>
      <p className="text-2xl text-center text-slate-200 font-bold backdrop-blur-xl">SOFTWARE ENGINEER, BACKEND & APP DEVELOPER</p>
      <div
        className='border-2 border-white w-7 h-12 rounded-full hover:cursor-pointer flex flex-col items-center py-1 absolute bottom-5'
        onClick={() => {document.location.href = '#about'}}
      >
        <div 
          className='w-2 h-4 bg-white rounded-full animate-scroll'
        />
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
