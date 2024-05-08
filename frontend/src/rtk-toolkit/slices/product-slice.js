import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async (url) => {
  const res = await fetch(url);
  const data = res.json();
  return data
  }
)

const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
})


export const { } = productSlice.actions;

export default productSlice.reducer;