import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

const Body = () => {

    return (
        <div id="content" className="h-screen" style={{scrollSnapType: "mandatory"}}>
            <Hero />
            <AboutMe />
            <Services />
            <Skills />
            <Work />
            <Testimonials />
            <Contact />
        </div>
    )
}
export default Body
