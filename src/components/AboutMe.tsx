// import Coding from "../../assets/coding.svg";
export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center">
          <img src={""} alt="img" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-8">
        <div className="w-11/12 sm:w-4/5 md:w-full">
          <h6 className="mb-2 text-xl font-semibold text-[#457B9D]">About</h6>
          <h5 className="mb-2 text-2xl md:text-3xl font-extrabold">
            About Me?
          </h5>
          <p className="text-justify text-sm md:text-base text-gray-600">
            Passionate about competitive programming, I am a software engineer
            who thrives on challenges and continuous learning. My journey in the
            tech world began with curiosity and has evolved into a deep-seated
            passion for coding and problem-solving. When I'm not immersed in
            code, I find solace in music, letting the melodies inspire my
            creativity and fuel my productivity. Driven by the desire to
            innovate, I constantly seek out new opportunities to enhance my
            skills and contribute to impactful projects. From debugging complex
            algorithms to crafting elegant software solutions, my commitment to
            excellence is unwavering. Embracing both the logical and the
            artistic aspects of life, I strive to strike a balance that keeps me
            motivated and forward-thinking.
          </p>
        </div>
      </div>
    </div>
  );
}
