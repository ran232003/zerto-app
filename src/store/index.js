import { configureStore } from "@reduxjs/toolkit";
import siteSlice from "./siteSlice";

const store = configureStore({
reducer:{site:siteSlice.reducer}
})
export default store