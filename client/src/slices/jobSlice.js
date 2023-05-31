import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobData = createAsyncThunk(
  "job/fetchData",
  async () => {
    const response = await axios.get("https://internshipgate-api.up.railway.app/api/job");
    return response.data;
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchJobData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;