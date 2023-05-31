import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  jobs: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("Company", companySchema);

export default Company ;