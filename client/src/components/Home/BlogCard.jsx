/* eslint-disable react/prop-types */

const BlogCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg border shadow-md">
        <img src={data.image} className="rounded-t-lg w-full hover:cursor-pointer" alt="" />
        <div className="pt-4 pb-8 px-6 space-y-4">
            <p className="text-[#2c4fa5] font-semibold text-sm sm:text-base hover:cursor-pointer">{data.tag}</p>
            <h1 className="font-semibold text-xl hover:cursor-pointer">{data.title}</h1>
            <p className="text-slate-500 text-[15px]">{data.description}</p>
            <div className="flex items-center mt-2">
                <img src="https://internshipgates3.s3.ap-south-1.amazonaws.com/Account.svg" className="w-10 h-10" alt="" />
                <p className="font-semibold ml-2">{data.author}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard