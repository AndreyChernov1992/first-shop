import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
// import { enableMapSet } from "immer";

// enableMapSet()

export default configureStore({
    reducer: {
        products: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
    }),
})