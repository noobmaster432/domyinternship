/* eslint-disable react/prop-types */
import lighting from "../../assets/lighting.svg";
import map from "../../assets/map.svg";
import clock from "../../assets/clock.svg";

const LatestCard = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-md px-4 py-6 sm:flex hover:cursor-pointer hover:shadow-lg">
      <div className="pb-2 sm:p-4">
        <img
          src={data.image}
          className="rounded-full w-12 h-12 border mx-auto"
          alt=""
        />
      </div>
      <div className="text-[#2c3895] sm:pr-4 w-full">
        <div className="xs:flex justify-between items-start">
          <div>
            <h1 className="text-base sm:text-lg text-black font-semibold">{data.title}</h1>
            <p className="text-xs sm:text-sm">at {data.company}</p>
          </div>
          {data.active && (
            <div className="flex items-end xs:items-center xs:pt-0 pt-2">
              <img src={lighting} className="text-[#2c3895] w-3 h-3" alt="" />
              <p className="text-xs sm:text-sm text-[#2c3895] font-semibold">
                Actively Hiring
              </p>
            </div>
          )}
        </div>
        <div className="xs:flex justify-between items-end sm:text-sm text-xs mt-8">
          <div className="flex flex-wrap w-2/3 justify-start items-center">
            <p>{data.stipend} stipend </p>
            <img src={map} className="w-3 h-3 text-[#2c3895] ml-2" alt="" />
            <p>{data.location} | {data.type} ,</p>
          </div>
            <div className="flex w-1/3 justify-end items-center pt-3 xs:pt-0">
                <img src={clock} className="w-4 h-4 text-[#2c3895] mr-1" alt="" />
                <p>Posted at: {data.posted}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCard