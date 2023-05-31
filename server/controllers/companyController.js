import Company from "../models/companyModel.js";

const getCompany=async(req,res)=>{
    try{
        const company=await Company.find({});
        res.status(200).json({company});
    }
    catch(err){
        res.status(500).json({err});
    }
}

export default getCompany ;