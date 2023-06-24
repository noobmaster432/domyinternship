import BlogCard from "./BlogCard";
import { blog } from "../data";
// import  { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchBlogData } from "../../slices/blogSlice";

const LatestBlogs = () => {
  // const { data } = useSelector((state) => state.blog);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchBlogData());
  // }, [dispatch]);
  return (
    <div className="px-4 bg-white sm:px-16 py-12 lg:px-12 xl:px-44">
      <p className="capitalize text-center text-[#2c4fa5] font-semibold text-sm sm:text-base">
        LATEST BLOGS
      </p>
      <h1 className="text-center text-2xl sm:text-4xl font-bold py-4">
        Read our interesting blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blog?.blog?.map((data) => (
          <BlogCard key={data._id} data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-10 justify-center rounded-md bg-white hover:bg-[#2c3895] hover:text-white px-4 py-2 text-[15px] font-semibold text-[#2c3895] shadow-sm ring-1 ring-inset ring-indigo-800">
          View All Blogs
        </button>
      </div>
    </div>
  );
}

export default LatestBlogs