import Card from "../components/Card"
import AppScreen from "../layouts/AppScreen";
import TechChip from "../components/TechChip";

import REMOTELY from "../assets/images/remotely.png";
import LILY from "../assets/images/lily.png";
import SABIDATA from "../assets/images/sabidata.png";

import StackIcon from "tech-stack-icons";


const Work = () => {

  const experiences = [
    {
      title: "Remotely",
      picture: REMOTELY,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem sapiente natus maxime. Ad explicabo nihil, culpa iusto excepturi dolorem ut placeat iste dignissimos quas esse in corporis, aliquam adipisci, harum minus ratione. Sunt similique esse eius labore magni, mollitia, aspernatur aut suscipit corporis ea eum provident modi officia expedita.",
      technology: [
        "HTML",
        "CSS",
        "React.js",
        "Tailwindcss",
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
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "Jinja2",
        "Redis"
      ],
      web: {
        url: "https://lily-cloud.vercel.app"
      }
    },
    {
      title: "Wireframe (SabiData)",
      picture: SABIDATA,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem sapiente natus maxime. Ad explicabo nihil, culpa iusto excepturi dolorem ut placeat iste dignissimos quas esse in corporis, aliquam adipisci, harum minus ratione. Sunt similique esse eius labore magni, mollitia, aspernatur aut suscipit corporis ea eum provident modi officia expedita.",
      web: {
        url: "https://miro.com/app/board/uXjVIYGVFMI=/?share_link_id=290485035440"
      }
    }
  ]

  return (
    <section id="work" className="flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold mt-6 mb-11">My work</h2>
      <br />
      <div className="flex flex-wrap items-center justify-center gap-10">
        {
          experiences.map((work, index) => {
            return (
              <>
              <Card key={index} className="bg-white flex flex-col
              items-center justify-center py-5 px-10 rounded-2xl
              "
              >
                <div
                  className={
                    `flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                    gap-20 justify-center w-full p-5`
                  }
                >
                  <div className="sm:hidden md:block bottom-0 w-1/2">
                    <h2 className="text-3xl font-bold">{work.title}</h2>
                    <br />
                    <p className="text-pretty text-wrap text-lg">{work.description}</p>
                    <div>
                      {/* Include Tech chips here */}
                    </div>
                  </div>
                  <AppScreen
                    picture={work.picture}
                    linkTo={work.web.url}
                    alt={work.title}
                    width={450} height={250}
                  />
                </div>
                <br />
                <div className="self-end border w-96 flex justify-between">
                  <button className="border px-8 py-2 bg-blue-200 rounded-xl">GitHub</button>
                  <button className="border px-8 py-2 bg-blue-200 rounded-xl">Live view</button>
                </div>
              </Card>
              {//Include a horizontal after each work experience
                index != experiences.length - 1 // Don't include for last experience
                && <hr className="w-full" />
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
