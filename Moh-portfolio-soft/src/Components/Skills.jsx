export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      color: "text-yellow-400",
      description: "Strong JS knowledge and advanced web development.",
    },
    {
      id: 2,
      name: "React",
      icon: "devicon-react-original",
      color: "text-blue-400",
      description: "Building fast and efficient React apps and websites.",
    },
    {
      id: 3,
      name: "Next.js",
      icon: "devicon-nextjs-plain",
      color: "text-gray-900 dark:text-white",
      description: "Fast SSR, dynamic routing, and optimized performance.",
    },
    {
      id: 4,
      name: "Angular",
      icon: "devicon-angularjs-plain",
      color: "text-red-600",
      description: "Building robust SPAs with TypeScript.",
    },
    {
      id: 5,
      name: "HTML5 & CSS3",
      icons: ["devicon-html5-plain", "devicon-css3-plain"],
      colors: ["text-orange-500", "text-blue-500"],
      description: "Semantic markup and responsive layouts.",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-original",
      color: "text-cyan-400",
      description: "Utility-first styling for modern UIs.",
    },
    {
      id: 7,
      name: "Firebase",
      icon: "devicon-firebase-plain",
      color: "text-yellow-500",
      description: "Backend services for modern web apps.",
    },
    {
      id: 8,
      name: "Git & GitHub",
      icon: "devicon-git-plain",
      color: "text-orange-600",
      description: "Version control and collaboration.",
    },
    {
      id: 9,
      name: "Vite",
      icon: "devicon-vitejs-plain",
      color: "text-indigo-500",
      description: "Fast modern frontend tooling.",
    },
  ];

  return (
    <section
        id="skills"
        className="w-full py-24 bg-white dark:bg-black relative z-10"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight 
                        text-gray-900 dark:text-white mb-16">
            Technical Skills
          </h1>


        {/* Skills Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col items-start space-y-3 group">
                {/* Icon(s) */}
                <div className="flex space-x-1">
                  {skill.icons ? (
                    skill.icons.map((icon, index) => (
                      <i
                        key={index}
                        className={`${icon} text-4xl ${skill.colors[index]} group-hover:scale-110 transition-transform duration-300`}
                      />
                    ))
                  ) : (
                    <i
                      className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  )}
                </div>

                {/* Skill Info */}
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}