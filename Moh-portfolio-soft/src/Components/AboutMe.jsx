export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center py-12 sm:py-6 py-4">
      {/* SAME container as Hero */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-2xl md:text-3xl  font-bold text-black leading-tight mb-6">
          I’m a passionate Frontend Developer <br />
          focused on building clean, responsive, <br />
          and user-centered web interfaces.
        </p>

        <p className="text-lg md:text-xl text-gray-600  leading-relaxed mb-10 font-(--font-inter) max-w-3xl">
          I enjoy turning ideas into high-quality digital experiences using
          modern frontend technologies, with a strong attention to detail,
          performance, and usability.
        </p>

        <h2 className="relative inline-flex items-center gap-4 px-6 py-3 rounded-lg border border-black text-black font-(--font-inter) overflow-hidden group">
          <span className="absolute inset-0 bg-black scale-x-0 origin-right transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>

          <span className="relative z-10 cursor-pointer transition-colors duration-700 group-hover:text-white">
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
