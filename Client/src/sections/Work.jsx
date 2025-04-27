import Card from "../components/Card"
import AppScreen from "../layouts/AppScreen";
import TechChip from "../components/TechChip";

import REMOTELY from "../assets/images/remotely.png";
import LILY from "../assets/images/lily.png";
import SABIDATA from "../assets/images/sabidata.png";


const Work = () => {

  const experiences = [
    {
      title: "Remotely",
      picture: REMOTELY,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem sapiente natus maxime. Ad explicabo nihil, culpa iusto excepturi dolorem ut placeat iste dignissimos quas esse in corporis, aliquam adipisci, harum minus ratione. Sunt similique esse eius labore magni, mollitia, aspernatur aut suscipit corporis ea eum provident modi officia expedita.",
      tech_stack: [
        "HTML5",
        "CSS3",
        "React.js",
        "TailwindCSS",
        "Nest.js",
        "Firebase",
      ],
      web: {
        url: "https://remotelydev.vercel.app"
      }
    },
    {
      title: "Lily",
      picture: LILY,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem sapiente natus maxime. Ad explicabo nihil, culpa iusto excepturi dolorem ut placeat iste dignissimos quas esse in corporis, aliquam adipisci, harum minus ratione. Sunt similique esse eius labore magni, mollitia, aspernatur aut suscipit corporis ea eum provident modi officia expedita.",
      tech_stack: [
        "HTML5",
        "CSS3",
        "Python",
        "Flask",
        "Redis"
      ],
      web: {
        url: "https://lily-cloud.vercel.app"
      }
    },
    {
      title: "SabiData (Wireframe)",
      picture: SABIDATA,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem sapiente natus maxime. Ad explicabo nihil, culpa iusto excepturi dolorem ut placeat iste dignissimos quas esse in corporis, aliquam adipisci, harum minus ratione. Sunt similique esse eius labore magni, mollitia, aspernatur aut suscipit corporis ea eum provident modi officia expedita.",
      tech_stack: ["Miro"],
      web: {
        url: "https://miro.com/app/board/uXjVIYGVFMI=/?share_link_id=290485035440"
      }
    }
  ]

  return (
    <section id="work" className="flex flex-col items-center px-8 py-10 border">
      <h2 className="text-5xl mt-6 mb-11">My work</h2>
      <br />
      <br />
      <div className="flex flex-wrap items-center justify-center gap-10">
        {
          experiences.map((work, index) => {
            return (
              <>
              <Card
                key={index}
                className={
                  `bg-white flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center gap-5 md:gap-20 px-5 w-screen rounded-2xl`
                }
              >
                {/* Work title, description, and tech stack */}
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold">{work.title}</h2>
                  <br />
                  <p className="text-pretty text-wrap text-lg">{work.description}</p>
                  <br />
                  <div className="flex gap-2 flex-wrap">
                    {/* Include Tech chips here */}
                    {
                      work.tech_stack.map((tech, index) => {
                        return <TechChip name={tech} key={index} />;
                      })
                    }
                  </div>
                </div>
                {/* Screen and Button */}
                <div className="flex flex-col items-center">
                  <AppScreen
                    picture={work.picture}
                    linkTo={work.web.url}
                    alt={work.title}
                    width={400} height={220}
                  />
                  <br />
                  <div className="flex justify-between w-full">
                    <button className="border px-8 py-2 border-blue-200 rounded-xl">GitHub</button>
                    <button className="border px-8 py-2 border-yellow-200 border-2 rounded-xl">Live view</button>
                  </div>
                </div>
              </Card>
              {//Include a horizontal after each work experience
                index !== experiences.length - 1 // Don't include for last experience
                && <hr className="w-full my-2" />
              }
              </>
            );
          })
        }
      </div>
    </section>
  )
}
export default Work;
