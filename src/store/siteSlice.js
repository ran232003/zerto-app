import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
    name:"site",
    initialState:{sites:[]},
    reducers:{
        addSite(state,action){
            console.log("add",action.payload)
            state.sites.push(action.payload);
            console.log(state.sites)
            //localStorage.setItem("sites", JSON.stringify(state.sites));
        },
        dbSites(state,action){
            state.sites = action.payload;
        },
        delete(state,action){
            const newArray = state.sites.filter((item)=>{
                return item.name != action.payload
            })
            state.sites = newArray;
            
        },
        update(state,action){
            console.log(action.payload)
            const newArray = state.sites.filter((item)=>{
                return item.name != action.payload.name;
            })
            newArray.push(action.payload.inputs)
            state.sites = newArray;
        }
    }
})
export default siteSlice;
export const siteAction = siteSlice.actions;
