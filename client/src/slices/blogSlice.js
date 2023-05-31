import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogData = createAsyncThunk(
  "blog/fetchData",
  async () => {
    const response = await axios.get("https://internshipgate-api.up.railway.app/api/blog");
    return response.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;