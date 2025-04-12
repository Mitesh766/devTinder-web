import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
    name: "connections",
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnection: (state, action) => {
            const newConnections = state.filter(req => req._id != action._id)
            return newConnections;
        }
    }
})


export const { addConnections, removeConnection } = connectionsSlice.actions

export default connectionsSlice.reducer