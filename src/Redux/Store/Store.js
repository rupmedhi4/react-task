import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../Slices/DataSlice";


export const Store = configureStore({
    reducer:DataSlice
})