export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24"
    >
      {/* SAME container as Hero */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-4xl md:text-5xl font-bold font-[var(--font-inter)] dark:text-white leading-tight mb-6">
          I’m a passionate Frontend Developer <br />
          focused on building clean, responsive, <br />
          and user-centered web interfaces.
        </p>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500 leading-relaxed mb-10 font-[var(--font-inter)] max-w-3xl">
          I enjoy turning ideas into high-quality digital experiences using
          modern frontend technologies, with a strong attention to detail,
          performance, and usability.
        </p>

        <h2 className="relative inline-flex items-center gap-4 px-6 py-3 rounded-lg border border-black text-black font-[var(--font-inter)] font-semibold overflow-hidden group">
          <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>

          <span className="relative z-10 transition-colors duration-700 group-hover:text-white">
            About Me
          </span>

          <span className="relative z-10 transition-all duration-700 group-hover:text-white group-hover:translate-x-3">
            →
          </span>
        </h2>

      </div>
    </section>
  );
}
