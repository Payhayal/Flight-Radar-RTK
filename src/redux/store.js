import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./Slices/flightSlice";

export default configureStore( {reducer: flightSlice});