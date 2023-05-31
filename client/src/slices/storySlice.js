import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStoryData = createAsyncThunk(
  "story/fetchData",
  async () => {
    const response = await axios.get("https://internshipgate-api.up.railway.app/api/story");
    return response.data;
  }
);

const storySlice = createSlice({
  name: "story",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStoryData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default storySlice.reducer;