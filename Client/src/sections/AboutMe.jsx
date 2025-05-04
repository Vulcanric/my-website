import Card from "../components/Card"
import Logo from "../components/Logo"

const AboutMe = () => {

  return (
    <section
      id="about"
      className="bg-[#2D2D2D] w-full py-8 px-10 flex flex-col items-center overflow-y-visible"
      style={{scrollSnapAlign: "start"}}
    >
      <h1 className="text-4xl text-white font-bold mt-5 mb-14">About me</h1>
      <Logo
        size={200}
        className="rounded-4xl border rounded-full p-2 bg-white"
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
    </section>
  )
}
export default AboutMe
