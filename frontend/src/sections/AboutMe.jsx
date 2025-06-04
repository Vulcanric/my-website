import Card from "../components/Card"
import Logo from "../components/Logo"

const AboutMe = () => {

  return (
    <section
      id="about"
      className="w-full py-8 px-10 flex flex-col items-center overflow-y-visible relative"
      style={{scrollSnapAlign: "start"}}
    >
      <h1 className="text-5xl text-white font-bold mt-5 mb-14">About me</h1>
      <Logo
        size={200}
        className="border rounded-full"
      />
      <br />
      <div className="md:w-[1000px] text-white text-lg">
      <b className="text-xl">Hello 👋, I'm Eric!</b>
      <p className="text-pretty text-wrap">A full-stack software developer with experience in Python, TypeScript, React, SQL, and noSQL databases. I've built and maintained web applications from the ground up, focusing on clean, effective, and scalable code.</p>
      <br />
      <p className="text-pretty text-wrap">My journey started at a young age, driven by a love for problem-solving and creating innovative solutions. Recently, I've been working on a project that leverages OCR and image-based product detection, applying modern technologies to real-world challenges. I'm commited to continuous learning and excited about any opportunity to collaborate and make a difference through tech.</p>
      <br />
      <p className="text-pretty text-wrap">I never stop learning, life-long learning is my foundation. I stay curious, adapt quickly to change, and continuously refine my skills to remain relevant in this ever-evolving industry.</p>
      </div>
      <br />
      <Card
        className="border my-10 w-96 h-80 shadow-md flex items-center justify-center"
      >
        <button className="text-2xl w-12 h-12 rounded-full border bg-white hover:bg-gray-50 active:bg-gray-200 shadow-md"><span>+</span></button>
      </Card>
      <div
        className='border-2 border-white w-7 h-12 rounded-full hover:cursor-pointer flex flex-col items-center py-1 absolute -top-24'
        onClick={() => {document.location.href = '#about'}}
      >
        <div 
          className='w-2 h-4 bg-white rounded-full animate-scroll'
        />
      </div>
    </section>
  )
}
export default AboutMe
