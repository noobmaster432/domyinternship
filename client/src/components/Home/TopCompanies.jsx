import TopCompanyCard from "./TopCompanyCard";
import { company } from "../data";
// import  { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCompanyData } from "../../slices/companySlice";

const TopCompanies = () => {
  // const { data } = useSelector((state) => state.company);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCompanyData());
  // }, [dispatch]);
  return (
    <div className="px-4 bg-[#f1f5f9] sm:px-16 py-12 lg:px-12 xl:px-44">
      <p className="capitalize text-center text-[#2c4fa5] font-semibold text-sm sm:text-base">
        TOP COMPANIES HIRING
      </p>
      <h1 className="text-center text-2xl sm:text-4xl font-bold py-4">
        Featured companies actively hiring
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {company?.company?.map((data) => (
          <TopCompanyCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default TopCompanies