import { useEffect, useState } from "react";

const works = [
  {
    id: 1,
    title: "Task-manager Dashboard UI",
    image: "/task-manager.png",
  },
  {
    id: 2,
    title: "Event Booking landing page",
    image: "/event-booking.png",
  }
];

export default function WorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="works" className="max-w-7xl mx-auto px-6 sm:py-6 py-4 md:py-12">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <h2 className="text-3xl font-semibold dark:text-white">
          Selected Works
        </h2>

        <a
          href="#works"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline self-start md:self-auto"
        >
          View all works →
        </a>
      </div>

      {/* WORK DISPLAY */}
      <div className="w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900">
        {/* IMAGE WRAPPER */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
          <img
            src={works[currentIndex].image}
            alt={works[currentIndex].title}
            className="w-full h-full object-cover transition-opacity duration-700"
          />

          {/* OVERLAY */}
          <div
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 
                                bg-black/70 text-white px-3 py-2 sm:px-4 sm:py-2 
                                rounded-lg text-xs sm:text-sm"
          >
            {works[currentIndex].title}
          </div>
        </div>
      </div>
    </section>
  );
}
