/* eslint-disable react/prop-types */

const TopCompanyCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-lg hover:cursor-pointer">
        <img src={data.image} className="mr-12 w-3/5 mb-6" alt="" />
        <h1 className="font-semibold text-xl">{data.name}</h1>
        <p className="font-sans text-sm text-slate-500 mt-1 mb-6">{data.tag}</p>
        <p className="text-slate-500 text-sm"><span className="font-bold text-black">{data.jobs}</span> Job Posting</p>
    </div>
  )
}

export default TopCompanyCard