import Card from "../components/Card"
import Logo from "../components/Logo"

const AboutMe = () => {

  return (
    <section
      id="about"
      className="w-full p-8 border flex flex-col items-center overflow-y-visible bg-black"
      style={{scrollSnapAlign: "start"}}
    >
      <h1 className="text-4xl text-white font-bold mt-5 mb-11">About me</h1>
      <Logo
        size={200}
        className="rounded-4xl border rounded-full p-2 bg-white"
      />
      <br />
      <p className="px-10 py-5 text-lg text-white">Hello, I'm Eric! I'm a full-stack software developer with experience in Python, TypeScript, SQL, and noSQL. I've built and maintained web applications from the ground up, focusing on clean, effective, and scalable code.</p>
      <p className="px-10 py-5 text-lg text-white">My journey started at a young age, driven by a love for problem-solving and creating innovative solutions. Recently, I've been working on a project that leverages OCR and image-based product detection, applying modern technologies to real-world challenges. I'm commited to continuous learning and excited about any opportunity to collaborate and make a difference through tech.</p>
      <br />
      <Card
        className="flex sm:flex-col my-10 border w-96 h-80 bg-gray-50 border align-center justify-center"
      >
        <button className="text-4xl border">+</button>
      </Card>
    </section>
  )
}
export default AboutMe
