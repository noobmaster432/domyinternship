import Job from "../models/jobsModel.js";

const getJobs=async(req,res)=>{
    try{
        const jobs=await Job.find({}).populate('company');
        res.status(200).json({jobs});
    }
    catch(err){
        res.status(500).json({err});
    }
}

export default getJobs ;