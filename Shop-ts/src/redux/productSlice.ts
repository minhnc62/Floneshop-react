import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';

const searchProductByTitle: any = createAsyncThunk("search", async (_, thunk: any) => {

  const title = thunk.getState().singleProduct.title;
  return fetch("https://fakeshop-api-json-server.herokuapp.com/products/" + "?q=" + title)
    .then((res) => res.json())
    .then((json) => {
      if (json.Error) {
        return thunk.rejectWithValue(json.Error);
      } else {
        return thunk.fulfillWithValue(json);
      }
    });
});
// const searchProductByTitle: any = createAsyncThunk(
//   "products/search",
//   async (payload, { rejectWithValue }) => {
//     return axios
//       .get("https://fakestoreapi.com/products/" + payload)
//       .then((res) => res.data)
//       .catch((err) => rejectWithValue(err));
//   }
// );
const getProducts = createAsyncThunk(
  "products/get",
  async (payload, { rejectWithValue }) => {
    return axios
      .get("https://fakeshop-api-json-server.herokuapp.com/products")
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err));
  }
);


const getProductsById: any = createAsyncThunk(
  "products/getById",
  async (payload, { rejectWithValue }) => {
    return axios
      .get("https://fakeshop-api-json-server.herokuapp.com/products/" + payload)
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err));
  }
);


export interface productState {
  
 
    id: number,
    title: string,
    price: number,
    description: string,
    category: any,
    image: any,
    discount:number,
    new:boolean,
    color:any,
    size:any,
    qty:number,
  

}


export interface initialState {
  loading: boolean,
  error: any,
  products: [],
  title: string
  singleProduct: any,
  
}


const productSlice: any = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    error: null,
    title: "",
    products: [],
    singleProduct: null,


  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    changeTitle(state, action) {
      state.title = action.payload;
    },
    


  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    });




    builder.addCase(getProductsById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductsById.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(getProductsById.rejected, (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    });



    builder.addCase(searchProductByTitle.pending, (state, action) => {
      state.loading = true;

    });
    builder.addCase(searchProductByTitle.rejected, (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(searchProductByTitle.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });


  },

});

export const {  changeTitle } = productSlice.actions;
export { getProducts, getProductsById, searchProductByTitle };

export const selectProductApi: any = (state: RootState) => state.productReducer;
export const selectProductById: any = (state: RootState) => state.productReducer;
export default productSlice.reducer;
