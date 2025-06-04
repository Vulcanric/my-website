import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section id="home"
      className="h-full w-full bg-[#0c1217] bg-right-top bg-[url('/3D-mobile1.png')] md:bg-[url('/3D-desktop.png')] bg-no-repeat bg-cover flex flex-col items-center justify-end gap-4 relative"
      style={{
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        className="size-fit absolute top-1/4 md:top-1/3 flex flex-col items-center"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-8xl md:text-9xl font-bold text-center text-slate-200 drop-shadow-xl">ERIC JOHN</h1>
        <br />
        <p className="w-fit px-5 text-2xl text-center text-slate-200 font-bold">SOFTWARE ENGINEER, FULLSTACK & WEB DEVELOPER</p>
        <br />
        <div className='flex size-fit gap-10 mb-36'>
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
      </motion.div>
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
    </section>
  )
}
export default Hero;
