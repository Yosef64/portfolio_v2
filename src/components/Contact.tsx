import { FaInstagram, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-[#daf8f9] bg-opacity-80 p-4 md:px-12">
      <h6 className="text-lg font-bold text-[#457B9D]">Contacts</h6>
      <h2 className="text-2xl font-extrabold">Get in touch</h2>
      <p className="text-sm font-semibold mb-3">yoseph.alemu@a2sv.org</p>
      <div className="flex space-x-2 mb-6">
        <a href="https://www.linkedin.com/in/yoseph-alemu-b92758230/">
          <FaLinkedin className="text-[#457B9D] w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://github.com/Yosef64">
          <FaGithub className="text-[#457B9D] w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/josi_qlex/">
          <FaInstagram className="text-[#457B9D] w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://t.me/Yosi64">
          <FaTelegram className="text-[#457B9D] w-6 h-6 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
        </a>
      </div>
      <p className="text-sm">
        Copyright © 2023. Developed & Designed by Yoseph Alemu
      </p>
    </div>
  );
}
