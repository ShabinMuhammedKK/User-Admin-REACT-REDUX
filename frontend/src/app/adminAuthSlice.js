import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    adminInfo:localStorage.getItem('adminInfo') ? 
    JSON.parse(localStorage.getItem('adminInfo'))
    : null
}

const adminAuthSlice = createSlice({
    name:'adminauth',
    initialState,
    reducers: {
        setCredentials:(state,action)=>{
            state.adminInfo = action.payload;
            localStorage.setItem('adminInfo',JSON.stringify(action.payload))
        },
        logoutAdmin:(state,action) =>{
            state.adminInfo = null;
            localStorage.removeItem('adminInfo');
        },
    }
})

export const {setCredentials,logoutAdmin} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;