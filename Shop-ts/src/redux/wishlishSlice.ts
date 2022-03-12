import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
//import { productState } from './productSlice';
import { toast } from "react-toastify";


export interface wishlishState {
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



const initialState: wishlishState[] = [];



const wishlishSlice: any = createSlice({
    name: 'wishlish',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        addWishlish: (wishlish, { payload }: PayloadAction<wishlishState>) => {

            const itemIndex = wishlish.findIndex(
                (item) => item.id === payload.id 
            );
            if (itemIndex >= 0) {
                wishlish[itemIndex] = {
                    ...wishlish[itemIndex],
                   
                };
                toast.info("Đã có trong mục yêu thích", {
                    position: "bottom-left",
                });
            }
            else {
                let tempProductItem = { ...payload };
                wishlish.push(tempProductItem);

                toast.success("Đã thêm vào mục yêu thích", {
                    position: "bottom-left",
                });
            }
        },
       
        remove: (wishlish, { payload }: PayloadAction<wishlishState>) => {
            toast.error("Đã xóa sản phẩm khỏi mục yêu thích", {
                position: "bottom-left",
              });
            return wishlish.filter((item: wishlishState) => item.id !== payload.id )

        },
        clearwishlish(wishlish, action) {
            
            toast.error("Đã xóa tất cả sản phẩm yêu thích", { position: "bottom-left" });
            return wishlish  = [];
          },
    },


});

export const { addWishlish, remove, clearwishlish } = wishlishSlice.actions;
export const selectwishlish: any = (state: RootState) => state.wishlishReducer;

export default wishlishSlice.reducer;
