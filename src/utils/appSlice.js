import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuShow: true ,
    },
    reducers: {
        MenuShow:(state)=>{
            state.isMenuShow = !state.isMenuShow ;
        },  
        closeMenuShow:(state)=>{
            state.isMenuShow = false ;
        },
},
}) ;

export const {MenuShow,closeMenuShow} = appSlice.actions ;

export default appSlice.reducer ;