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
    quantity: number,
    color: any,
    size: any,
    discount: number,


}



const initialState: cartState[] = [];



const cartSlice: any = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        add: (cart, { payload }: PayloadAction<cartState>) => {

            const itemIndex = cart.findIndex(
                (item) => item.id === payload.id && item.color === payload.color && item.size === payload.size
            );
            if (itemIndex >= 0) {
                cart[itemIndex] = {
                    ...cart[itemIndex],
                    quantity: cart[itemIndex].quantity + 1,
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
        },
        decreaseCart: (cart, { payload }: PayloadAction<cartState>) => {
            const itemIndex = cart.findIndex(
                (item) => item.id === payload.id && item.color === payload.color && item.size === payload.size
            );
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;

                toast.info("Đã giảm số lượng sản phẩm", {
                    position: "bottom-left",
                });
            }
        },
        removeItem: (cart, { payload }: PayloadAction<cartState>) => {
            toast.error("Đã xóa sản phẩm khỏi giỏ hàng", {
                position: "bottom-left",
              });
            return cart.filter((item: cartState) => item.id !== payload.id || item.color !== payload.color || item.size !== payload.size)

        },
        clearCart(cart, action) {
            
            toast.error("Đã xóa tất cả sản phẩm", { position: "bottom-left" });
            return cart  = [];
          },
    },


});

export const { add, removeItem, clearCart, decreaseCart } = cartSlice.actions;
export const selectCart: any = (state: RootState) => state.cartReducer;

export default cartSlice.reducer;
