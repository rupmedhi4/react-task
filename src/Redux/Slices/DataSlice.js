import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  locationData: [],
  isModalVisible : false
  
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addLocationData: (state, action) => {
      state.locationData = [...state.locationData, ...action.payload];
      console.log(state.locationData);
    },
    setIsModalVisible:(state, action)=>{
      state.isModalVisible = !state.isModalVisible
    }
  },
});

export const { addLocationData , setIsModalVisible} = DataSlice.actions;

export default DataSlice.reducer;
