import Story from "../models/story.Model.js";

const getStory=async(req,res)=>{
    try{
        const story=await Story.find({});
        res.status(200).json({story});
    }
    catch(err){
        res.status(500).json({err});
    }
}

export default getStory ;