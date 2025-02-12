import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOutline } from "react-icons/io5";
import { icons } from "./data";
import { useState } from "react";
import { sendEmail } from "@/services/EmailServices";
type InputProps = {
  data: { placeholder: string; name: string; type: string };
  setUserInfo: Function;
};
type UserInfoType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const inputs = [
  { placeholder: "Name *", name: "name", type: "text" },
  { placeholder: "Email *", name: "email", type: "email" },
  { placeholder: "Your Subject *", name: "subject", type: "text" },
  { placeholder: "Your Message *", name: "message", type: "textarea" },
];
const InputGroup = ({ data, setUserInfo }: InputProps) => {
  return (
    <div className="relative w-full">
      <p className="mb-[1rem] w-full relative">
        <span className="z-2">
          {data.type === "textarea" ? (
            <textarea
              onChange={(e) =>
                setUserInfo((prev: UserInfoType) => ({
                  ...prev,
                  [data.name]: e.target.value,
                }))
              }
              className="w-full z-2 bg-[rgba(0,0,0,0)] h-[145px] focus:outline-none focus:ring-0 text-[14px] block p-4 bg-input-bg rounded-lg text-white placeholder-gray-400"
              placeholder={data.placeholder}
              name={data.name}
            />
          ) : (
            <input
              onChange={(e) =>
                setUserInfo((prev: UserInfoType) => ({
                  ...prev,
                  [data.name]: e.target.value,
                }))
              }
              className="w-full z-2 bg-[rgba(0,0,0,0)] focus:outline-none focus:ring-0 block p-4 bg-input-bg rounded-lg text-white text-[14px]  placeholder-gray-400"
              placeholder={data.placeholder}
              type={data.type}
              name={data.name}
            />
          )}
        </span>
      </p>
    </div>
  );
};

export default function Contact() {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    console.log(userInfo);

    if (
      !userInfo.name ||
      !userInfo.email ||
      !userInfo.subject ||
      !userInfo.message
    ) {
      setError("Please fill all the fields");
      return;
    }
    try {
      await sendEmail(
        userInfo.name,
        userInfo.email,
        userInfo.subject,
        userInfo.message
      );
      
    } catch (err) {
      console.log("Error sending email", err);
      setError("Failed to send message");
    }

    return;
  }

  return (
    <section className="text-white font-inter ">
      <div className="mx-auto pt-[80px] sm:px-[20px] lg:px-[100px] ">
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="w-full p-8  rounded-lg">
            <h4 className="uppercase font-inter font-medium mb-6">
              Contact Info
            </h4>
            <ul className="space-y-10 mb-[55px] text-inter">
              <li className="flex items-center  opacity-100 bg-[#0F0F0F] space-x-4">
                <div className="w-[68px] h-[68px] flex justify-center items-center text-[30px] z-1 relative opacity-100 bg-[#0F0F0F]">
                  <span className="absolute z-5 w-full h-full rounded-lg top-0 bg-bg-gr left-0 opacity-25  "></span>

                  <IoMailOutline />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] opacity-50 text-[#BCBCBC]">
                    MAIL ME
                  </span>
                  <h5 className="text-white text-[14px] opacity-70 font-medium">
                    yosefale65@gmail.com
                    <br />
                    yoseph.beze@gmail.com
                  </h5>
                </div>
              </li>
              <li className="flex items-center space-x-4 font-inter">
                <div className="w-[68px] h-[68px] flex justify-center items-center text-[30px] z-1 relative opacity-100 bg-[#0F0F0F]">
                  <span className="absolute z-5 w-full h-full rounded-lg top-0 bg-bg-gr left-0 opacity-25  "></span>

                  <BsTelephone />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] opacity-50 text-[#BCBCBC]">
                    CONTACT ME
                  </span>
                  <h5 className="text-white text-[16px] opacity-80 font-medium">
                    +251715908007
                    <br />
                    +251926908007
                  </h5>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-[68px] h-[68px] flex justify-center items-center text-[30px] z-1 relative opacity-100 bg-[#0F0F0F]">
                  <span className="absolute z-5 w-full h-full rounded-lg top-0 bg-bg-gr left-0 opacity-25  "></span>
                  <SlLocationPin />
                </div>
                <div className="flex flex-col text">
                  <span className=" text-[14px] opacity-50 text-[#BCBCBC]">
                    LOCATION
                  </span>
                  <h5 className=" text-white text-[14px] opacity-70 font-medium">
                    St. George, Addis Ababa
                    <br />
                    Ethiopia
                    <br />
                    WIU 3BWs
                  </h5>
                </div>
              </li>
            </ul>

            <h4
              data-aos="fade-up"
              className="uppercase font-inter font-medium mb-6"
            >
              Social Media
            </h4>
            <ul className="flex space-x-4">
              <li className="flex space-x-6 opacity-100 bg-[#0F0F0F]">
                {icons.map((icon) => {
                  if (icon.id === 4) {
                    return;
                  }
                  return (
                    <div className="sm:w-16 xs:w-10 xs:h-10 group/icon hover:bg-white sm:h-16 flex items-center justify-center rounded-full relative shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] border border-white/10 text-white transition duration-300">
                      <span className="absolute  w-full h-full inset-0 rounded-full z-10 opacity-25 bg-bg-gr backdrop-blur-[40px]"></span>
                      {icon.icon}
                    </div>
                  );
                })}
              </li>
              {/* Repeat for other social links */}
            </ul>
          </div>

          <div className="relative col-span-2 opacity-100 bg-black px-8 py-10 bg-gradient-to-r">
            <span className="absolute w-full h-full top-0 bg-bg-gr left-0 opacity-25  rounded-[30px] "></span>

            <div className="shadow-box">
              <img
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
                alt="Star"
                className="absolute top-0 right-10"
              />
              <h2 className="text-[44px] font-medium mb-[30px]">
                Let’s work <span className="text-blue-500">together.</span>
              </h2>
              <form className="">
                {inputs.map((input) => {
                  return <InputGroup setUserInfo={setUserInfo} data={input} />;
                })}

                <a
                  // href="https://wpriverthemes.com/gridx/contact-info/"
                  onClick={handleSubmit}
                  className="w-full cursor-pointer bg-[#323232] text-center hover:text-black relative inline-block hover:bg-white text-white z-1 transition duration-300 rounded-[10px] text-[16px] font-medium px-[30px] py-[12px]"
                >
                  Send Message
                </a>
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
