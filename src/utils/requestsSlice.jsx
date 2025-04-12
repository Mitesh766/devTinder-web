import { createSlice } from "@reduxjs/toolkit";

export const requestsSlice= createSlice({
   name:"request",
   initialState:null,
   reducers:{
    addRequests:(state,action)=>action.payload
   } 
})

export const {addRequests}= requestsSlice.actions
export default requestsSlice.reducer