export default function ServicesOffered() {
  return (
   <section className="relative w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt- md:pt-">

        {/* Header */}
        <header className="pb-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-500 shrink-0"></div>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 dark:text-white">
              Services Offered:
            </h1>
          </div>
        </header>

        {/* Services */}
        <main className="pb-20">

          {/* Service 01 */}
          <div className="border-b border-gray-400 dark:border-gray-800 py-8">
            <div className="flex gap-6">
              <span className="w-16 text-6xl font-light tracking-wider shrink-0 select-none text-transparent 
                [-webkit-text-stroke:1px_#4B5563] dark:[-webkit-text-stroke:1px_#9CA3AF]">
                01
              </span>
              <div className="flex flex-col gap-2 max-w-3xl">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Web Development
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500 leading-relaxed font-[var(--font-inter)]">
                  I build high-performance, scalable, and SEO-friendly websites using modern frameworks, with React at the core. From business websites to custom web applications, I focus on clean architecture, responsive design, and exceptional user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Service 02 */}
          <div className="border-b border-gray-400 dark:border-gray-800 py-8">
            <div className="flex gap-6">
              <span className="w-16 text-6xl font-light tracking-wider shrink-0 select-none text-transparent
                [-webkit-text-stroke:1px_#4B5563] dark:[-webkit-text-stroke:1px_#9CA3AF]">
                02
              </span>
              <div className="flex flex-col gap-2 max-w-3xl">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                  UI/UX Design
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-[var(--font-inter)]">
                  I design and build visually polished, user-friendly interfaces with a strong focus on usability, clarity, and responsiveness. My goal is to create intuitive experiences that feel smooth and consistent across all screen sizes.
                </p>
              </div>
            </div>
          </div>

          {/* Service 03 */}
          <div className="border-b border-gray-400 dark:border-gray-800 py-8">
            <div className="flex gap-6">          
              <span className="w-16 text-6xl font-light tracking-wider shrink-0 select-none text-transparent
                [-webkit-text-stroke:1px_#4B5563] dark:[-webkit-text-stroke:1px_#9CA3AF]">
                03
              </span>
              <div className="flex flex-col gap-2 max-w-3xl">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Web Consultation
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-[var(--font-inter)]">
                  I help businesses and creators make informed frontend decisions, from improving existing interfaces to selecting the right tools for building modern web experiences.
                </p>
              </div>
            </div>
          </div>

        </main>
      </div>
    </section>
  );
}
