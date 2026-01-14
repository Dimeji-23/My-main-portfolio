import { motion } from "framer-motion";
import Me from "../assets/Me.jpg";

export default function Hero() {
  return (
    <section
      id="/"
      className="min-h-screen flex items-center pt-28 md:pt-32"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <p className="text-gray-900  text-lg md:text-xl mb-3">
              Crafting meaningful digital experiences through clean and scalable web development 💻.
            </p>

            <h1 className="text-5xl md:text-6xl  font-bold leading-tight">
              Hi! I’m Sulayman Muhammad,<br />
              <span className="text-gray-900/60 ">
                a Frontend Developer
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-md text-base md:text-lg">
              Dedicated to turning ideas into high-quality, user-focused web solutions that elevate brands and engage audiences.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 mt-7 px-6 py-3 rounded-lg font-medium overflow-hidden group bg-black border border-black transition-all duration-700"
            >
              {/* Sliding background */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-right transition-transform duration-1000 ease-in-out group-hover:scale-x-100 group-hover:origin-left"></span>

              {/* Text */}
              <span className="relative z-10 text-white transition-colors duration-700 group-hover:text-black">
                Let’s Talk →
              </span>
            </motion.a>
          </div>

          {/* RIGHT SIDE (AVATAR) */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="w-56 h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-gray-300 via-black to-gray-700 dark:from-gray-700 dark:via-white dark:to-gray-500 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={Me}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <p className="text-black italic text-center max-w-xs mt-6 text-sm md:text-base">
              Passionate about building fast, responsive, and visually appealing products that deliver real value.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
