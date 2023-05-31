import Blog from "../models/blogModels.js";

const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(200).json({ blog });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getBlog;
