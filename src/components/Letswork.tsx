import { ScaleTranstion } from "./TransitionEffect";

export default function Letswork() {
  return (
    <ScaleTranstion className="xs:h-[200px] lg:h-full w-full">
      <div className="rounded-lg w-full h-full">
        <div className=" relative text-tx-color bg-[#0F0F0F] rounded-[30px] p-6 xs:h-[200px] lg:h-full w-full flex flex-start items-end justify-between">
          <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>
          <img
            decoding="async"
            src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
            alt="Star"
            className="absolute top-0 left-4"
          />

          <h2 className="md:text-[44px] xs:text-[27px] leading-[0.9] font-medium font-inter">
            Let's <br />
            work <span className="text-[#5B78F6] font-700">together.</span>
          </h2>
          <a
            href="https://wpriverthemes.com/gridx/contact-info/"
            className="about-btn"
          >
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
              alt="Star"
            />
          </a>
        </div>
      </div>
    </ScaleTranstion>
  );
}
