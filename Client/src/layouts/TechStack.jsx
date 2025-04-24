import StackIcon from "tech-stack-icons";


const TechStack = () => {
  const techSkills = [
    {name: "Python", iconName: "python", wiki: "https://en.wikipedia.org/wiki/Python_(programming_language)"},
    {name: "C", iconName: "c++", wiki: "https://en.wikipedia.org/wiki/C_(programming_language)"},
    {name: "TypeScript", iconName: "typescript", wiki: "https://en.wikipedia.org/wiki/TypeScript"},
    {name: "Bash", iconName: "bash", wiki: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"},
    {name: "HTML5", iconName: "html5", wiki: "https://en.wikipedia.org/wiki/HTML5"},
    {name: "CSS3", iconName: "css3", wiki: "https://en.wikipedia.org/wiki/CSS"},
    {name: "JavaScript", iconName: "js", wiki: "https://simple.wikipedia.org/wiki/JavaScript"},
    {name: "React.js", iconName: "reactjs", wiki: "https://en.wikipedia.org/wiki/React_(software)"},
    {name: "Tailwind CSS", iconName: "tailwindcss", wiki: "https://simple.wikipedia.org/wiki/Tailwind_CSS"},
    // {name: "Express.js", iconName: "expressjs", wiki: "https://en.wikipedia.org/wiki/Express.js"},
    {name: "Django", iconName: "django", wiki: "https://en.wikipedia.org/wiki/Django_(web_framework)"},
    {name: "Flask", iconName: "flask", wiki: "https://en.wikipedia.org/wiki/Flask_(web_framework)"},
    {name: "Markdown", iconName: "markdown", wiki: "https://en.wikipedia.org/wiki/Markdown"},
    {name: "MySQL", iconName: "mysql", wiki: "https://en.wikipedia.org/wiki/MySQL"},
    {name: "Redis", iconName: "redis", wiki: "https://en.wikipedia.org/wiki/Redis"},
    {name: "MongoDB", iconName: "mongodb", wiki: "https://en.wikipedia.org/wiki/MongoDB"},
    {name: "Docker", iconName: "docker", wiki: "https://en.wikipedia.org/wiki/Docker_(software)"},
    {name: "GitHub", iconName: "github", wiki: "https://en.wikipedia.org/wiki/GitHub"},
    {name: "Git", iconName: "git", wiki: "https://en.wikipedia.org/wiki/Git"},
    {name: "Miro", iconName: "miro", wiki: "https://en.wikipedia.org/wiki/Miro_(collaboration_platform)"},
    {name: "Figma", iconName: "figma", wiki: "https://en.wikipedia.org/wiki/Figma"},
    {name: "OpenAI", iconName: "openai", wiki: "https://community.openai.com/t/based-on-specific-wikipedia-page/34507"},
    {name: "Linux", iconName: "linux", wiki: "https://en.wikipedia.org/wiki/Linux"}
  ]

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
      {
        techSkills.map((tech, index) => {
          return (
            <a
              key={index}
              href={tech.wiki}
              title="Click to open"
              target="blank_"
              className="flex flex-col items-center gap-5 border shadow-lg hover:bg-gray-100 rounded-lg p-5 cursor-pointer"
            >
              <StackIcon name={tech.iconName} className="w-11" />
              {tech.name}
            </a>
            )
        })
      }
    </div>
  )
}

export default TechStack;
