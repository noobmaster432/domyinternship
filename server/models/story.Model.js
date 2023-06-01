import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

const Story = mongoose.model("Story", storySchema);

export default Story ;