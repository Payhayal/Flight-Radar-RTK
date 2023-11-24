import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";



const initialState = {
    flights: [],
    isLoading :true,
    isError: false,
    route:[],
}

const flightSlice = createSlice({
    name : 'flight',
    initialState,
    extraReducers: (builder) => {
    builder
    // while you are waiting the answer.. 
    .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
    })
    // when you get the positive answer..
    .addCase(getFlights.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
    })
    // when you get the negative answer..
    .addCase(getFlights.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
        alert("Sorry, an error has occurred...");
    })
    },
    reducers : {
        setRoute : (state, action) => {
            const newRoute = action.payload.map((i) => [i.lat, i.lng]);
            state.route = newRoute;
         },
    },
});

export default flightSlice.reducer;
export const {setRoute} = flightSlice.actions;
