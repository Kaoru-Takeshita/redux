import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";


export const store = configureStore({
    reducer: {
        cart: cartReducer,//cart部分の名前は自由に変更できる
        modal: modalReducer,
    },
});

