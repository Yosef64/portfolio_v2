import { SmartPhone01Icon, WebDesign02Icon } from "hugeicons-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

const iconsStyle: string =
  "text-[25px]  text-white group-hover/icon:text-black";

export type Discription = {
  time: string;
  title: string;
  place: string;
  description: string;
};
export type SkillType = {
  top: string;
  mid: string;
  bot: string;
};
export const exps: Discription[] = [
  {
    time: "SEP 2024 - DEC 2024 ",
    title: "Back-end Developer",
    place: "Ethronic",
    description:
      "Focused on backend development using Express.js and PostgreSQL.Gained hands-on experience in building RESTful APIs, managing databases, and optimizing server-side performance.",
  },
  {
    time: "2024 - Present ",
    title: "Student Trainee",
    place: "A2SV | Africa to Slicon Valley",
    description:
      "Developed and optimized backend systems using Python, ensuring efficient data processing and seamless integration with frontend applications.",
  },
];
export const edus = [
  {
    time: "Jan 2022 - Aug 2025 ",
    title: "Software Engineering",
    place: "Bahir Dar University",
    description:
      "Graduated in Software Engineering (IT Stream) from Bahir Dar University.",
  },
  {
    time: "Jan 2024 - Present ",
    title: "Data structure and algorithm",
    place: "Africa to Slicon Valley",
    description:
      "Participated in the A2SV program, where I gained my skills in data structures and algorithms. Engaged in competitive programming and problem-solving.",
  },
];
export const skills = [
  {
    top: "95%",
    mid: "Python",
    bot: "Data analysis and Back-end",
  },
  {
    top: "80%",
    mid: "JavaScript",
    bot: "Web and Mobile Development",
  },
  {
    top: "80%",
    mid: "Dart",
    bot: "Flutter",
  },
];
export const awards = [
  {
    top: "May 2024",
    mid: "Top problem solver of 2024",
    bot: "Leetcode",
  },
  {
    top: "May 2023",
    mid: "Bluebase",
    bot: "Non enim praesent",
  },
];

export const projects = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2Frental_web.png?alt=media&token=39365dc7-515c-4c26-bc1b-4e8ad7f0cda2",
    title: "Rental Website",
    desc: "A rental website that helps house owners find tenants. It was an amazing experience to work on this.",
    git: "https://github.com/Yosef64/Rental_Website",
    isLive: true,
    live: "https://jorent.vercel.app/",
    stacks: ["React", "Node.js", "Firebase", "Material Ui", "Next.js"],
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/login-1-62a50.appspot.com/o/06.jpg?alt=media&token=e164cb79-3f12-498d-b6f0-d3cc35d1bdae",
    title: "Rental Mobile",
    desc: "A rental mobile app helping house owners find tenants. It's an ongoing project I'm currently working on.",
    git: "https://github.com/Yosef64/RentApp",
    isLive: false,
    stacks: ["Flutter", "Node.js", "Firebase"],
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2Fwallpaper_page.jpg?alt=media&token=471330ef-414e-4189-accc-71f81970659e",
    title: "Wallpaper Mobile",
    desc: "A React Native wallpaper app showcasing impressive Habeshan images.",
    git: "https://github.com/Yosef64/wallpaper",
    isLive: false,
    stacks: ["React Native", "Node.js", "Firebase"],
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2FScreenshot%202025-01-23%20165312.png?alt=media&token=ae2e4554-c8f6-4578-b022-f52a94372d74",
    title: "Portfolio",
    desc: "A React project showcasing details about me.",
    git: "https://github.com/Yosef64/portfolio",
    isLive: true,
    live: "https://josialex.vercel.app/",
    stacks: ["React"],
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/rent-ffb49.appspot.com/o/photos%2FScreenshot%202024-10-02%20123400.png?alt=media&token=fb394c68-9ec2-4aa7-b4e1-f2573d4abcad",
    title: "Hakim Hub",
    desc: "A platform providing hospital and doctor information. Features filtering by location and specialty.",
    git: "https://github.com/Yosef64",
    isLive: true,
    live: "https://hakimhubweb.netlify.app/",
    stacks: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    img: "https://firebasestorage.googleapis.com/v0/b/rent-ffb49.appspot.com/o/photos%2FScreenshot%202024-09-25%20113928.png?alt=media&token=4761dcb3-bc48-4e6a-8a71-3d07ad5da4c9",
    title: "RateEat",
    desc: "A mobile app for item-specific reviews, built with Node.js, MongoDB, and Flutter.",
    git: "https://github.com/Yosef64",
    isLive: true,
    live: "https://rateeat.app/",
    stacks: ["React", "Node.js", "MongoDB"],
  },
];
export const icons = [
  {
    id: 1,
    icon: <FaLinkedin className={iconsStyle} />,
    link: "https://www.linkedin.com/in/yoseph-alemu-b92758230/",
  },
  {
    id: 2,
    icon: <FaInstagram className={iconsStyle} />,
    link: "https://www.instagram.com/yosefale65/",
  },
  {
    id: 3,
    icon: <FaGithub className={iconsStyle} />,
    link: "https://github.com/Yosef64",
  },
  {
    id: 4,
    icon: <RiTelegram2Line className={iconsStyle} />,
    link: "https://t.me/Yosi64",
  },
];

export const offering = [
  {
    id: 1,
    title: "Web Development",
    icon: (
      <WebDesign02Icon
        size={40}
        color={"#fff"}
        // variant={"stroke"}
      />
    ),
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: <SmartPhone01Icon size={40} color={"#fff"} />,
  },
];

export const offeringDes = [
  {
    title: "Web Development",
    desc: "Let’s bring your ideas to life with a stunning website! Whether you need a sleek portfolio, a dynamic web app, or an e-commerce platform, I’ve got you covered. I work with modern frameworks like React and Next.js, plus powerful backend tools like Node.js and Django, to make sure your site is fast, secure, and easy to use. Oh, and it’ll look amazing on any device—because who likes a clunky website? 🤯",
  },
  {
    title: "Mobile Development",
    desc: "Want to launch the next big app? I’ll turn your vision into a fully functional mobile experience using Flutter, so your app runs smoothly on both iOS and Android. My goal is to build apps that not only work like a charm but also keep users engaged with top-notch UI/UX design. Let’s make your app idea a reality!",
  },
];
