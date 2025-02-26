import { offering, offeringDes } from "./data";

export default function Offering() {
  return (
    <div className="lg:px-[150px] xs:px-[20px] py-[80px] ">
      <div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-2 text-white ">
        <div className="relative bg-[#0F0F0F] flex flex-col justify-evenly px-8 rounded-[30px]">
          <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>

          {offering.map((item, index) => {
            return (
              <ChildOffering key={index} title={item.title} icon={item.icon} />
            );
          })}
        </div>
        <div className="col-span-2">
          <div className="relative  grid grid-cols-1 gap-8 text-tx-color bg-[#0F0F0F] rounded-[30px] p-4">
            <span className="absolute w-full h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>

            {offeringDes.map((item, index) => {
              return (
                <OfferingDesc key={index} title={item.title} desc={item.desc} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
type OfferingProps = {
  left: { title: string; icon: JSX.Element };
  right: {
    title: string;
    desc: string;
  };
};
function ChildOffering({ title, icon }: OfferingProps["left"]) {
  return (
    <div className="flex items-center space-x-6 p-50 uppercase font-inter text-[15px] leading-[16px]">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
function OfferingDesc({ title, desc }: OfferingProps["right"]) {
  return (
    <div className="z-20 relative p-[24px_47px_59px_30px] font-inter">
      <span className="absolute w-full rounded-[30px] h-full top-0 bg-bg-gr2 left-0 opacity-25 "></span>

      <h4 className="text-[#BCBCBC] opacity-56 text-[15px] font-medium uppercase mb-[.5rem]">
        {title}
      </h4>
      <p className="text-white opacity-80  text-[14px]">{desc}</p>
    </div>
  );
}
