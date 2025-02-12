import { WebDesign02Icon } from "hugeicons-react";
import React from "react";
import Image from "../assets/black_man_avatar1.jpg";
import Letswork from "./Letswork";
import { icons } from "./data";
import { ScaleTranstion } from "./TransitionEffect";

const SmartPhone01Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={40}
    height={40}
    color={"#fff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 19H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const Intro = () => {
  return (
    <div className="p-[5%]">
      <div className="max-w-7xl flex flex-col mx-auto gap-12">
        {/* firt grid         'lg-custom': '920px', // Define a custom breakpoint at 920px
         */}
        <div className="grid  lg-custom:grid-cols-2 bg-black sm:grid-cols-1 rounded-2xl gap-6 shadow px-1">
          <ScaleTranstion>
            <div className="font-inter relative text-tx-color bg-[#0F0F0F] rounded-[30px] relative group text-white flex flex-col rounded-[30px] p-12 border border-gray-800  shadow-md">
              {/* <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tl from-black via-transparent to-transparent"></div> */}
              <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
              <div className="flex justify-center xs:flex-col md:flex-row items-center gap-4">
                <img
                  src={Image}
                  alt="Yoseph Alemu"
                  className="w-[200px] h-[190px] bg-img object-cover mr-6 rounded-tl-[30px] rounded-br-[20px]"
                />
                <div className="flex xs:items-center md:items-start flex-col gap-2">
                  <p className="text-[#BCBCBC] opacity-70 text-[14px] uppercase">
                    Software Developer
                  </p>
                  <h2 className="text-[30px] leading-[1.2] font-inter font-semibold">
                    Yoseph Alemu
                  </h2>
                  <p className="text-gray-300 text-[14px] block tracking-[0.3px]  opacity-70">
                    I am a Web Designer based in San Francisco.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-5 ">
                <img
                  className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                  decoding="async"
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                  alt="Star"
                />
              </div>
            </div>
          </ScaleTranstion>
          <div className="w-full h-full flex flex-col gap-5 rounded-2xl ">
            <div className=" rounded-lg">
              <div className="p-4 h-[60px] bg-card-bg rounded-[30px]"></div>
            </div>
            <div className="opacity-100 grid flex-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
              <ScaleTranstion>
                <div className="group relative text-tx-color bg-[#0F0F0F] rounded-[30px]">
                  <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                  <div className=" flex flex-col p-6 gap-6">
                    <img
                      decoding="async"
                      src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
                      alt=""
                      className="w-50 h-[100px]"
                    />
                    <div className="flex font-inter items-center justify-between">
                      <div className="text-tx-color ">
                        <h5 className="text-[12px]  opacity-50 text-[#BCBCBC] text-uppercase">
                          MORE ABOUT ME
                        </h5>
                        <h2 className="text-[20px] font-medium">Credentials</h2>
                      </div>

                      <a href="/about" className="about-btn">
                        <img
                          className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                          decoding="async"
                          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                          alt="Star"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </ScaleTranstion>
              <ScaleTranstion>
                <div className="opacity-100 rounded-[30px]">
                  <div className="group flex flex-col p-6 gap-6 relative text-tx-color bg-[#0F0F0F] rounded-[30px]">
                    <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                    <img
                      decoding="async"
                      src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                      alt=""
                      className="w-51 h-[100px]"
                    />
                    <div className="font-inter flex justify-between items-center">
                      <div className="text-tx-color">
                        <h5 className="text-[12px] opacity-50 text-[#BCBCBC]">
                          SHOWCASE
                        </h5>
                        <h2 className="text-[20px] font-medium">Projects</h2>
                      </div>

                      <a href="/works/" className="about-btn">
                        <img
                          className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                          decoding="async"
                          src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                          alt="Star"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </ScaleTranstion>
            </div>
          </div>
        </div>

        {/* Credentials Card */}
        <div className="opacity-100 w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScaleTranstion className="relative text-tx-color bg-[#0F0F0F] rounded-[30px]">
            <div className="w-full h-full">
              <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
              <div className="flex flex-col p-6 gap-6">
                <img
                  decoding="async"
                  src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/gfonts.png"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <div className="text-tx-color">
                    <h5 className="text-[12px]  opacity-50 text-[#BCBCBC]">
                      BLOG
                    </h5>
                    <h2 className="text-[20px] font-medium">GFonts</h2>
                  </div>

                  <a href="/blog" className="about-btn">
                    <img
                      className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                      decoding="async"
                      src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                      alt="Star"
                    />
                  </a>
                </div>
              </div>
            </div>
          </ScaleTranstion>
          <ScaleTranstion className="group bg-[#0F0F0F] opacity-100 md:col-span-1 lg:col-span-2 rounded-[30px]">
            <div className="w-full h-full">
              <div className=" z-20 relative flex flex-col justify-between p-6 h-full">
                <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                <div className="relative flex gap-6 justify-center items-center p-6 rounded-[30px]">
                  <span className="absolute  w-full h-full  z-10 opacity-10 bg-bg-gr2 backdrop-blur-[40px] top-0 left-0 rounded-[30px]"></span>

                  {icons.map((icon) => {
                    return (
                      <div className="sm:w-16 xs:w-10 xs:h-10 group/icon hover:bg-white sm:h-16 flex items-center justify-center rounded-full relative shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] border border-white/10 text-white transition duration-300">
                        <span className="absolute  w-full h-full inset-0 rounded-full z-10 opacity-10 bg-bg-gr backdrop-blur-[40px]"></span>
                        {icon.icon}
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center font-inter justify-between">
                  <div className="text-white">
                    <h5 className="text-[12px] opacity-50 text-[#BCBCBC]">
                      STAY WITH ME
                    </h5>
                    <h2 className="text-[20px] font-medium">Profiles</h2>
                  </div>

                  <a href="/contact" className="about-btn">
                    <img
                      className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                      decoding="async"
                      src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                      alt="Star"
                    />
                  </a>
                </div>
              </div>
            </div>
          </ScaleTranstion>
          <ScaleTranstion className="group bg-[#0F0F0F] opacity-100 col-span-1   rounded-[30px]">
            <div className="w-full h-full">
              <div className="z-20 relative flex flex-col justify-between p-6 h-full">
                <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>

                <div className="relative flex gap-6 justify-center items-center p-6 rounded-[30px] ">
                  <WebDesign02Icon
                    size={40}
                    color={"#fff"}
                    // variant={"stroke"}
                  />

                  <SmartPhone01Icon />
                </div>
                <div className="flex items-center font-inter justify-between">
                  <div className="text-tx-color">
                    <h5 className="text-[12px] opacity-50 text-[#BCBCBC]">
                      SPECIALIZATION
                    </h5>
                    <h2 className="text-[20px] font-medium  font-inter">
                      Services Offering
                    </h2>
                  </div>

                  <a href="/service/" className="about-btn">
                    <img
                      className="w-12 h-12 group-hover:brightness-100 filter brightness-[30%] transition duration-300 ease-in-out"
                      decoding="async"
                      src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                      alt="Star"
                    />
                  </a>
                </div>
              </div>
            </div>
          </ScaleTranstion>
        </div>

        {/* Projects Card */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <ScaleTranstion>
            <div className="relative text-tx-color bg-[#0F0F0F] rounded-[30px]">
              <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
              <div className="z-20 relative flex flex-col justify-between p-6 h-full">
                <div className="grid sm:1 md:grid-cols-3 gap-5">
                  <div className="relative gap-2 p-14 py-8 text-center flex flex-col items-center justify-center">
                    <span className="absolute w-full rounded-[30px] h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                    <span className="text-[34px] font-sora">07</span>
                    <p className="text-[12px] opacity-50 text-[#BCBCBC] uppercase font-inter">
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="relative gap-2 p-14 py-8 text-center flex flex-col items-center justify-center">
                    <span className="absolute rounded-[30px] w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                    <span className="text-[34px] font-sora">+125</span>
                    <p className="text-[12px] opacity-50 text-[#BCBCBC] font-inter uppercase">
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>
                  <div className="relative gap-2 p-14 py-8 text-center flex flex-col items-center justify-center">
                    <span className="absolute rounded-[30px]  w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
                    <span className="text-[34px] font-sora">+210</span>
                    <p className="opacity-50 text-[#BCBCBC] font-inter text-[12px] uppercase">
                      Total <br />
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleTranstion>

          <Letswork />
        </div>
      </div>
    </div>
  );
};

export default Intro;
