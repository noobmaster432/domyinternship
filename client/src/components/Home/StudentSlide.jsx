/* eslint-disable react/prop-types */

const StudentSlide = ({comment}) => {
  return (
    <div className="md:flex md:mx-12">
      <div className="w-full md:w-1/2 lg:w-2/3 py-6 text-slate-500 px-8">
        <h1 className="text-lg md:text-[26px] font-semibold pb-4">{comment.message}</h1>
        <p className="text-xs md:text-sm">{comment.name}</p>
        <p className="text-xs md:text-sm">{comment.post}</p>
      </div>
      <img src={comment.image} className="rounded-lg w-full md:w-1/2 lg:w-1/3" alt="" />
    </div>
  );
}

export default StudentSlide