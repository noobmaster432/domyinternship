import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  posted: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job ;