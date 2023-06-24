import LatestCard from "./LatestCard";
import { job } from "../data";
// import  { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchJobData } from "../../slices/jobSlice";

const LatestInternship = () => {
  // const { data } = useSelector((state) => state.job);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchJobData());
  // }, [dispatch]);
  return (
    <div className="px-4 sm:px-16 py-12 lg:mx-12 xl:mx-48">
      <p className="capitalize text-center text-[#2c4fa5] font-semibold text-sm sm:text-base">
        LATEST INTERNSHIP OPENING
      </p>
      <h1 className="text-center text-2xl sm:text-4xl font-bold pt-4 pb-12">
        Explore remote friendly, flexible internship opportunities.
      </h1>
      <div className="space-y-6">
        {job?.jobs?.map((data) => (
          <LatestCard key={data._id} data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-10 justify-center rounded-md bg-white hover:bg-[#2c3895] hover:text-white px-4 py-2 text-[15px] font-semibold text-[#2c3895] shadow-sm ring-1 ring-inset ring-indigo-800">
          Browse All Internship Postings
        </button>
      </div>
    </div>
  );
};

export default LatestInternship;
