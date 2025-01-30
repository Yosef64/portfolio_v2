import {
  awards,
  Discription,
  edus,
  exps,
  icons,
  skills,
  SkillType,
} from "./data";

type DiscProps = {
  data: Discription;
};
type SkillProps = {
  data: SkillType;
};

const Disc = ({ data }: DiscProps) => {
  return (
    <div className="block" data-aos="zoom-in">
      <h5 className="text-[16px] text-[#BCBCBC]  opacity-60 font-medium">
        {data.time}
      </h5>
      <h4 className="text-[18px] text-t-color font-medium ">{data.title}</h4>
      <h6 className="text-[14px] mb-[0.5rem] text-[#BCBCBC] opacity-60 font-medium">
        {data.place}
      </h6>
      <p className="block text-[16px] font-medium">{data.description}</p>{" "}
    </div>
  );
};
const SkillAndAward = ({ data }: SkillProps) => {
  return (
    <div className="skill-item aos-init aos-animate" data-aos="zoom-in">
      <span className="text-[#BCBCBC] opacity-60 block font-medium mb-[9px]">
        {data.top}
      </span>
      <h4 className="text-[#FFFFFF] opacity-90 font-medium mb-[4px]">
        {data.mid}
      </h4>
      <p className="text-[#BCBCBC] opacity-60  font-medium m-0">{data.bot}</p>
    </div>
  );
};

export default function Credential() {
  return (
    <section className="text-tx-color pt-[80px] font-inter  relative">
      <div className="px-[50px] flex xs:flex-col md:flex-row gap-[80px]">
        <div className=" gap-4">
          <div className="md:w-[370px] sm:w-full sticky top-[15%] h-300">
            <div className="bg-[#0F0F0F] opacity-100 pt-6 pr-6 pb-8 pl-6 relative text-center">
              <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-30 rounded-[30px]"></span>

              <div className="mb-[50px]">
                <img
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/me.png"
                  alt=""
                  className="m-auto rounded-[30px] h-auto max-w-full object-cover"
                />
              </div>
              <h3 className="font-medium text-[26px] mb-[.5rem] ">
                David Henderson
              </h3>
              <p className="text-[16px] mb-[34px] opacity-50">
                @davidhenderson
              </p>

              <ul className="flex justify-center gap-4 mb-[36px]">
                {icons.map((icon) => {
                  return (
                    <div className="w-12 group/icon hover:bg-white h-12 flex items-center justify-center rounded-full relative shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)] border border-white/10 text-white transition duration-300">
                      <span className="absolute  w-full h-full inset-0 rounded-full z-10 opacity-30 bg-bg-gr1 backdrop-blur-[40px]"></span>
                      {icon.icon}
                    </div>
                  );
                })}
              </ul>

              <a
                // href="https://wpriverthemes.com/gridx/contact-info/"
                className="w-full bg-[#323232] hover:text-black relative inline-block hover:bg-white text-white z-1 transition duration-300 rounded-[16px] text-[16px] font-medium px-[30px] py-[12px]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div
          data-elementor-type="wp-page"
          data-elementor-id="1065"
          className="col-span-3"
        >
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-6d57135 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="6d57135"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-no">
              <div
                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2705f96 margin-0"
                data-id="2705f96"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-35461e7 elementor-widget elementor-widget-gridxdacredentialcontentbox"
                    data-id="35461e7"
                    data-element_type="widget"
                    data-widget_type="gridxdacredentialcontentbox.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="credential-content flex-1">
                        <div className="pb-[110px]" data-aos="zoom-in">
                          <h3 className="text-[18px] uppercase font-medium mb-[38px] trailing-[1.2]">
                            About Me
                          </h3>
                          <p>
                            Sit amet luctussd fav venenatis, lectus magna
                            fringilla inis urna, porttitor rhoncus dolor purus
                            non enim praesent in elementum sahas facilisis leo,
                            vel fringilla est ullamcorper eget nulla facilisi
                            etisam dignissim diam quis enim lobortis viverra
                            orci sagittis eu volutpat odio facilisis mauris sit.
                            Scelerisque fermentum duisi faucibus in ornare quam
                            sisd sit amet luctussd fav venenatis, lectus magna
                            fringilla zac urna, porttitor rhoncus dolor purus
                            non enim praesent cuz elementum sahas facilisis
                            leot.
                          </p>{" "}
                        </div>

                        <div className="mb-[85px]">
                          <h3
                            data-aos="fade-up"
                            className="mb-[22px] font-bold"
                          >
                            EXPERIENCE
                          </h3>
                          <div className="flex flex-col gap-8">
                            {exps.map((exp) => {
                              return <Disc data={exp} />;
                            })}
                          </div>
                        </div>

                        <div className="mb-[85px]">
                          <h3
                            data-aos="fade-up"
                            className="mb-[22px] font-bold text-[18px]"
                          >
                            Education
                          </h3>
                          <div className="flex flex-col gap-8">
                            {edus.map((edu) => {
                              return <Disc data={edu} />;
                            })}
                          </div>
                        </div>

                        <div className="skills-wrap">
                          <h3
                            data-aos="fade-up"
                            className="mb-[22px] font-bold text-[18px]"
                          >
                            Skills
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill) => {
                              return <SkillAndAward data={skill} />;
                            })}
                          </div>
                        </div>

                        <div className="pt-[100px]">
                          <h3
                            data-aos="fade-up"
                            className="mb-[22px] font-bold text-[18px]"
                          >
                            Awards
                          </h3>
                          <div className="grid grid-cols-2 gap-4 ">
                            {awards.map((award) => {
                              return <SkillAndAward data={award} />;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
