import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

const Body = () => {

    return (
        <div className="h-screen" style={{scrollSnapType: "mandatory"}}>
            <Hero />
            <AboutMe />
            <Services />
            <Work />
            <Testimonials />
            <Contact />
        </div>
    )
}
export default Body
