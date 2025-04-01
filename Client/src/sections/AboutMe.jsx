import Card from "../components/Card"
import Logo from "../components/Logo"

const AboutMe = () => {

  return (
    <section id="about" className="w-full p-6 border flex flex-col items-center justify-center overflow-y-visible bg-black" style={{scrollSnapAlign: "start"}}>
      <Logo className="rounded-4xl" size={200} />
      <p className="p-5 text-white">Hello, I'm Eric! I'm a full-stack software developer with experience in Python, TypeScript, SQL, and noSQL. I've built and maintained web applications from the ground up, focusing on clean, effective, and scalable code. My journey started at a young age, driven by a love for problem-solving and creating innovative solutions. Recently, I've been working on a project that leverages OCR and image-based product detection, applying modern technologies to real-world challenges. I'm commited to continuous learning and excited about any opportunity to collaborate and make a difference through tech.</p>
      <hr />
      <Card
        className="flex sm:flex-col p-5 border w-96 h-80 bg-gray-50"
      >
      </Card>
    </section>
  )
}
export default AboutMe
