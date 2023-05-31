/* eslint-disable react/prop-types */
import arrow from "../../assets/arrow.svg";

const RoleCard = ({ role }) => {
  return (
    <div className="bg-white rounded-lg p-6 hover:cursor-pointer hover:shadow-lg hover:border-t-[#2c3895] border-t-4 border-white group">
      <div className="group-hover:bg-blue-100 rounded-full p-4 bg-slate-100 w-fit">
        <img src={role.image} className="" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold mt-2">{role.title}</h1>
          <p className="text-slate-500">{role.jobs} Jobs</p>
        </div>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default RoleCard;
