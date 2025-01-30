import { FaGithub, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

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
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
  },
  {
    time: "2024 - Present ",
    title: "Student Trainee",
    place: "A2SV | Africa to Slicon Valley",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
  },
];
export const edus = [
  {
    time: "Jan 2022 - Aug 2025 ",
    title: "Software Engineering",
    place: "Bahir Dar University",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
  },
  {
    time: "Jan 2024 - Present ",
    title: "Data structure and algorithm",
    place: "Africa to Slicon Valley",
    description:
      "Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.",
  },
];
export const skills = [
  {
    top: "85%",
    mid: "Python",
    bot: "Data analysis and Back-end",
  },
  {
    top: "60%",
    mid: "JavaScript",
    bot: "Lorem",
  },
];
export const awards = [
  {
    top: "14 May 2020",
    mid: "Bluebase",
    bot: "Non enim praesent",
  },
  {
    top: "14 May 2020",
    mid: "Bluebase",
    bot: "Non enim praesent",
  },
];
export const icons = [
  {
    id: 1,
    icon: <FaTwitter className={iconsStyle} />,
  },
  {
    id: 2,
    icon: <FaInstagram className={iconsStyle} />,
  },
  {
    id: 1,
    icon: <FaGithub className={iconsStyle} />,
  },
  {
    id: 1,
    icon: <FaTelegram className={iconsStyle} />,
  },
];
