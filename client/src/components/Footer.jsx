import { Categories, Internshipgate, locations } from "./data";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#2e3a97] lg:flex text-white px-16 pt-16 pb-12">
        <div className="lg:w-2/5">
          <img
            src="https://www.internshipgate.com/static/media/logoend.0d8fbfa761b464a5d9e05e5dadfb2b00.svg"
            alt=""
          />
          <div className="flex gap-6 mt-4 mx-3 mb-14 lg:mb-4">
            <img
              src="https://www.internshipgate.com/static/media/fb.0148bcfa18c890a439f1321a056c4d5e.svg"
              alt=""
              className="hover:cursor-pointer hover:opacity-95"
            />
            <img
              src="https://www.internshipgate.com/static/media/insta.418f241c8af22c1e7490eecc7e570fcc.svg"
              alt=""
              className="hover:cursor-pointer hover:opacity-95"
            />
            <img
              src="https://www.internshipgate.com/static/media/yt.5dea8f15db3f61babe05a13c405c9a33.svg"
              alt=""
              className="hover:cursor-pointer hover:opacity-95"
            />
            <img
              src="https://www.internshipgate.com/static/media/linkedin.b179e3fa41dea30093221438793abba3.svg"
              alt=""
              className="hover:cursor-pointer hover:opacity-95"
            />
          </div>
        </div>
        <div className="grid lg:w-3/5 grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h1 className="text-xl font-bold">INTERNSHIPGATE</h1>
            {Internshipgate.map((text, index) => (
              <p
                key={index}
                className="w-fit hover:cursor-pointer hover:font-medium"
              >
                {text}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold">CATEGORIES</h1>
            {Categories.map((text, index) => (
              <p
                key={index}
                className="w-fit hover:cursor-pointer hover:font-medium"
              >
                {text}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold">LOCATIONS</h1>
            {locations.map((text, index) => (
              <p
                key={index}
                className="w-fit hover:cursor-pointer hover:font-medium"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1a2577] md:flex items-center justify-between space-y-3 md:space-y-0 text-white text-xs lg:text-sm py-5 px-16">
        <p>@Copyright 2023 - INTERNSHIPGATE, A Unit of ISAN DATA SYSTEMS</p>
        <p>Powered by ISAN DATA SYSTEMS</p>
      </div>
    </div>
  );
};

export default Footer;
