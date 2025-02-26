import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "./data";

export default function Projects() {
  return (
    <div className="flex flex-col font-inter items-center gap-6 px-8 pt-24 pb-12">
      {/* Header */}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col justify-between text-tx-color bg-[#0F0F0F] rounded-[30px] px-3 py-4"
          >
            <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-[20px]"
            />
            <div className="p-4 flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-t-color font-bold">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.git}>
                      <div className="w-12 group/icon hover:bg-white h-12 flex items-center justify-center rounded-full relative shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] border border-white/10 text-white transition duration-300">
                        <span className="absolute  w-full h-full inset-0 rounded-full z-10 opacity-30 bg-bg-gr1 backdrop-blur-[40px]"></span>
                        <FaGithub
                          size={20}
                          className="text-white group-hover/icon:text-black transition duration-300"
                        />
                      </div>
                    </a>
                    <a href={project.live}>
                      <div className="w-12 group/icon hover:bg-white h-12 flex items-center justify-center rounded-full relative shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] border border-white/10 text-white transition duration-300">
                        <span className="absolute  w-full h-full inset-0 rounded-full z-10 opacity-30 bg-bg-gr1 backdrop-blur-[40px]"></span>
                        <FaLink
                          size={17}
                          className="text-white group-hover/icon:text-black transition duration-300"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <p className="text-white opacity-80  text-[14px] font-inter">
                  {project.desc}
                </p>
              </div>

              <div className="flex mt-6 gap-4  flex-wrap items-end">
                {project.stacks.map((stack) => {
                  return (
                    <div className="relative rounded px-[20px] py-[7px] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] ">
                      <span className="absolute  w-full h-full opacity-10 bg-bg-gr backdrop-blur-[40px]  top-0 left-0 rounded-[10px]"></span>
                      <p className="opacity-40  text-[14px]">{stack}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
