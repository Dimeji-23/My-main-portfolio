export default function Skills() {
  return (
    <section id="skills" className="w-full py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Decorative circle */}
        <div className="absolute -top-6 -left-6 w-24 h-24 border border-gray-300 dark:border-gray-700 rounded-full opacity-50 pointer-events-none" />

        {/* Heading */}
        <h1 className="text-5xl md:text-5xl font-medium mb-16 tracking-tight text-center text-gray-900 dark:text-white">
        Technical Skills
        </h1>


        {/* Skills Grid */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Skill Item */}
            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-javascript-plain text-4xl text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  JavaScript
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Strong JS knowledge and advanced web development.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-react-original text-4xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  React
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Building fast and efficient React apps and websites.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-nextjs-plain text-4xl text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Next.js
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Fast SSR, dynamic routing, and optimized performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-angularjs-plain text-4xl text-red-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Angular
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Building robust SPAs with TypeScript.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <div className="flex space-x-1">
                <i className="devicon-html5-plain text-4xl text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                <i className="devicon-css3-plain text-4xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  HTML5 & CSS3
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Semantic markup and responsive layouts.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-tailwindcss-original text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Tailwind CSS
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Utility-first styling for modern UIs.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-firebase-plain text-4xl text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Firebase
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Backend services for modern web apps.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-git-plain text-4xl text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Git & GitHub
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Version control and collaboration.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-3 group">
              <i className="devicon-vitejs-plain text-4xl text-indigo-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-3">
                <h3 className="text-lg font-medium  text-gray-900 dark:text-white">
                  Vite
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Fast modern frontend tooling.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
}
