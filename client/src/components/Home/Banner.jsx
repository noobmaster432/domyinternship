import search from "../../assets/search.svg";
import map from "../../assets/map.svg";
import sidebg from "../../assets/sidebg.png";

const Banner = () => {
  return (
    <div className="lg:flex bg-banner w-full">
      <div className="text-white text-left px-10 sm:px-20 pt-16 pb-8 lg:pb-16 xl:pb-8 lg:w-1/2 w-full">
        <h1 className="sm:text-6xl text-4xl font-bold">
          Find dream internship that you love to do.
        </h1>
        <p className="sm:text-xl text-base font-medium font-body pt-10">
          Join the Virtual Internship Program in Emerging Technologies with our
          Summer Internship Offer
        </p>
        <div className="bg-white w-full text-gray-600 placeholder:text-gray-600 rounded-3xl sm:flex px-4 py-4 sm:py-2 mt-12 mb-8 space-y-6 sm:space-y-0 sm:space-x-8">
          <div className="flex space-x-2">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="e.g. Web developer, Mobile App developer"
              className="outline-none text-sm w-full xs:w-auto lg:w-20 xl:w-auto"
            />
          </div>
          <div className="flex space-x-2">
            <img src={map} alt="" />
            <select name="location" className="outline-none text-sm w-full xs:w-auto lg:w-20 xl:w-auto">
              <option value="location">Select Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
              <option value="pune">Pune</option>
              <option value="kolkata">Kolkata</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="chennai">Chennai</option>
            </select>
          </div>
          <button className="bg-[#2c3895] text-white w-full py-2 rounded-3xl">
            Search
          </button>
        </div>
        <p className="">Currently listing 5642 internships from 1017 companies</p>
      </div>
      <div>
        <img src={sidebg} className="mx-auto lg:ml-6 xl:ml-16" alt="" />
      </div>
    </div>
  );
};

export default Banner;
