import TechStack from "../layouts/TechStack";


const Skills = () => {

    return (
        <section id="contact" className="flex flex-col items-center p-8 border">
            <h2 className="text-4xl font-bold mt-5 mb-11">My Skills</h2>
            <br />
            <TechStack />
            <br />
            <p className="text-lg">...and many more!</p>
        </section>
    )
}
export default Skills;
