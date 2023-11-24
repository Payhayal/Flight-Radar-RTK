import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../helpers/constants";


export const getFlights = createAsyncThunk("flights/getFlights", async () => {

// asenkron
const res = await axios.request(options);

// dizi olarak gelen verileri objeye ceviriyoruz
const newData = res.data.aircraft.map((flight) => ({
    id:flight[0],
    code:flight[1],
    lat:flight[2],
    lng:flight[3],
}));
// return
return newData;
})