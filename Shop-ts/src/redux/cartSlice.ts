import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
//import { productState } from './productSlice';
import { toast } from "react-toastify";


export interface cartState {
    id: number,
    title: string,
    price: number,
    description: string,
    categori: string,
    image: string,
    qty: number,
    

}



const initialState: cartState[] = [];



const cartSlice: any = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        add: (cart, { payload }: PayloadAction<cartState>) => {

            const existingIndex = cart.findIndex(
                (item) => item.id === payload.id
            );
            if (existingIndex > 0) {
                cart[existingIndex] = {
                    ...cart[existingIndex],
                    //  qty: cart[existingIndex].qty + 1,
                };
                toast.info("Đã tăng số lượng sản phẩm", {
                    position: "bottom-left",
                  });
            }
            else {
                let tempProductItem = { ...payload };
                cart.push(tempProductItem);

                toast.success("Đã thêm vào giỏ hàng", {
                  position: "bottom-left",
                });
              }

            // if (cart.length > 0) {
            //     const payloadAlreadyExsisted = cart.some((product: cartState) => {
            //         return product.id === payload.id;
            //     });
            //     if (payloadAlreadyExsisted) {
            //         const cartFiltered = cart.filter((product: cartState) => {
            //             product.id !== payload.id;
            //         });
            //         const updatedCart = [...cartFiltered, payload];
            //         toast.success("Đã thêm vào giỏ hàng", {
            //             position: "bottom-left",
            //         });
            //         return updatedCart;
            //     } else {
            //         toast.success("Đã thêm vào giỏ hàng", {
            //             position: "bottom-left",
            //         });
            //         return [...cart, payload];
            //     }
            // } else {
            //     toast.success("Đã thêm vào giỏ hàng", {
            //         position: "bottom-left",
            //     });
            //     return [payload];
            // }


            // remove(state, action: PayloadAction<number>) {
            //     //return state.filter((todo) => todo.id != action.payload);
            // },
            // clear(state) {
            //     //state.length = 0;
            // },
        },
    },


});

export const { add, remove, clear } = cartSlice.actions;
export const selectCart: any = (state: RootState) => state.cartReducer;

export default cartSlice.reducer;
