import TechStack from "../layouts/TechStack";


const Skills = () => {

    return (
        <section id="skills" className="flex flex-col items-center p-8 border">
            <h2 className="text-5xl mt-5 mb-11">My skills</h2>
            <br />
            <br />
            <TechStack />
            <br />
            <p className="text-lg">...and many more!</p>
        </section>
    )
}
export default Skills;
