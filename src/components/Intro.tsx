import React from "react";

const Intro = () => {
  return (
    <div className="p-[5%]">
      <div className="max-w-7xl flex flex-col mx-auto gap-12">
        {/* firt grid         'lg-custom': '920px', // Define a custom breakpoint at 920px
         */}
        <div className="grid  lg-custom:grid-cols-2 bg-black sm:grid-cols-1 rounded-2xl gap-6 shadow px-1">
          <div className="bg-card-bg relative group text-white flex flex-col rounded-[30px] p-12 border border-gray-800  shadow-md">
            {/* <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tl from-black via-transparent to-transparent"></div> */}

            <div className="flex items-center  gap-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/habeshanwall-4dceb.appspot.com/o/another%2Fimage_portfolio.png?alt=media&token=0c48e28a-a7de-4066-98cd-a2d6ebe58e0c"
                alt="David Henderson"
                className="w-[300px] h-[190px] bg-white object-cover mr-6 rounded-tl-2xl rounded-br-3xl"
              />
              <div>
                <p className="text-[#BCBCBC] text-md font-semibold mb-[3px] capitalize">
                  Software Developer
                </p>
                <h2 className="text-[30px] font-semibold">David Henderson</h2>
                <p className="text-gray-300">
                  I am a Web Designer based in San Francisco.
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 right-5 ">
              <img
                className="w-12 h-12 group-hover:brightness-100 filter brightness-50 transition duration-300 ease-in-out"
                decoding="async"
                src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg"
                alt="Star"
              />
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5 rounded-2xl ">
            <div className=" rounded-lg">
              <div className="p-4 h-[60px] bg-card-bg rounded-[30px]"></div>
            </div>
            <div className="grid flex-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-card-bg rounded-[30px]">
                <div className=" flex flex-col p-6 gap-6">
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png"
                    alt=""
                    className="w-50 h-[80px]"
                  />
                  <div className="flex items-center justify-between">
                    <div className="text-tx-color ">
                      <h5 className="text-[12px] text-uppercase">
                        MORE ABOUT ME
                      </h5>
                      <h2 className="text-[20px]">Credentials</h2>
                    </div>

                    <a
                      href="https://wpriverthemes.com/gridx/credential/"
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
              </div>
              <div className="bg-card-bg rounded-[30px]">
                <div className="flex flex-col p-6 gap-6">
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                    alt=""
                    className="w-50 h-[80px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-tx-color">
                      <h5 className="text-[12px]">SHOWCASE</h5>
                      <h2 className="text-[20px]">Projects</h2>
                    </div>

                    <a
                      href="https://wpriverthemes.com/gridx/work/"
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
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card-bg col-span-1 rounded-[30px]"></div>
          <div className="bg-card-bg md:col-span-1 lg:col-span-2 rounded-[30px] h-20 rounded-lg"></div>
          <div className="bg-card-bg col-span-1 h-20 rounded-lg rounded-[30px]"></div>
        </div>

        {/* Projects Card */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-purple-300  h-20 rounded-lg"></div>
          <div className="bg-purple-600 h-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
