import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=> {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items:[],
        status:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'Loading'
        }).addCase(fetchProducts.fulfilled, (state) => {
            state.status = 'succeesed'
        }).addCase(fetchProducts.rejected, (state) => {
            state.status = 'filed'
        })
    }
})

export default productsSlice.reducer;