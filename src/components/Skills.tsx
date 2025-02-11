
export default function Skills() {
  const skills = [
    {
      id: 1,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      alt: "csharp",
    },
    {
      id: 2,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt: "python",
    },
    {
      id: 3,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      id: 4,
      url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
    },
    {
      id: 5,
      url: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      alt: "flutter",
    },
    {
      id: 6,
      url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#daf8f9] p-5 gap-5">
      {/* Section Heading */}
      <div className="flex flex-col items-center font-sora gap-2">
        <span className="text-[#457B9D] text-lg font-bold">Skills</span>
        <span className="text-2xl font-extrabold">What am I capable of?</span>
      </div>
      {/* Skills Icons */}
      <div className="grid grid-cols-3  sm:grid-cols-6 gap-5">
        {skills.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.alt}
            className="w-20 h-20"
          />
        ))}
      </div>
    </div>
  );
}
