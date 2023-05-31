import { roles } from "../data";
import RoleCard from "./RoleCard";

const Browse = () => {
  return (
    <div className="px-4 bg-[#f1f5f9] sm:px-16 py-12 lg:px-12 xl:px-40">
      <p className="capitalize text-center text-[#2c4fa5] font-semibold text-sm sm:text-base">
        BROWSE CATEGORY
      </p>
      <h1 className="text-center text-2xl sm:text-4xl font-bold py-4">
        Discover internships across popular roles
      </h1>
      <p className="text-center text-lg text-slate-500 mb-12">
        Select a role and we&apos;ll show you relevant internships for it!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {roles.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
