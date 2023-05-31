import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyData = createAsyncThunk(
  "company/fetchData",
  async () => {
    const response = await axios.get("http://localhost:5000/api/company");
    return response.data;
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCompanyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companySlice.reducer;