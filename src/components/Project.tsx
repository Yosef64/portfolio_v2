import React, { useState } from "react";

const projects = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2Frental_web.png?alt=media&token=39365dc7-515c-4c26-bc1b-4e8ad7f0cda2",
    title: "Rental Website",
    desc: "A rental website that helps house owners find tenants. It was an amazing experience to work on this.",
    git: "https://github.com/Yosef64/Rental_Website",
    isLive: true,
    live: "https://jorent.vercel.app/",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/06.jpg?alt=media&token=e164cb79-3f12-498d-b6f0-d3cc35d1bdae",
    title: "Rental Mobile",
    desc: "A rental mobile app helping house owners find tenants. It's an ongoing project I'm currently working on.",
    git: "https://github.com/Yosef64/RentApp",
    isLive: false,
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2Fwallpaper_page.jpg?alt=media&token=471330ef-414e-4189-accc-71f81970659e",
    title: "Wallpaper Mobile",
    desc: "A React Native wallpaper app showcasing impressive Habeshan images.",
    git: "https://github.com/Yosef64/wallpaper",
    isLive: false,
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2FScreenshot%202025-01-23%20165312.png?alt=media&token=ae2e4554-c8f6-4578-b022-f52a94372d74",
    title: "Portfolio",
    desc: "A React project showcasing details about me.",
    git: "https://github.com/Yosef64/portfolio",
    isLive: true,
    live: "https://josialex.vercel.app/",
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/rent-ffb49.appspot.com/o/photos%2FScreenshot%202024-10-02%20123400.png?alt=media&token=fb394c68-9ec2-4aa7-b4e1-f2573d4abcad",
    title: "Hakim Hub",
    desc: "A platform providing hospital and doctor information. Features filtering by location and specialty.",
    git: "https://github.com/Yosef64",
    isLive: true,
    live: "https://hakimhubweb.netlify.app/",
  },
  {
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/rent-ffb49.appspot.com/o/photos%2FScreenshot%202024-09-25%20113928.png?alt=media&token=4761dcb3-bc48-4e6a-8a71-3d07ad5da4c9",
    title: "RateEat",
    desc: "A mobile app for item-specific reviews, built with Node.js, MongoDB, and Flutter.",
    git: "https://github.com/Yosef64",
    isLive: true,
    live: "https://rateeat.app/",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = current * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProjects = projects.slice(firstIndex, lastIndex);
  const pages = Math.ceil(projects.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-[#457B9D] text-lg font-bold">Projects</h3>
        <h2 className="text-2xl font-extrabold">What I have made?</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl shadow-lg bg-white max-w-xs mx-auto"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.desc}</p>
              <div className="flex gap-4 mt-auto">
                {project.isLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i + 1)}
            className={`px-3 py-1 rounded-lg ${
              current === i + 1
                ? "bg-[#457B9D] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
