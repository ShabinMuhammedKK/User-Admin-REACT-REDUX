import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo:localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo'))
    : null
    
}

const userAuthSlice = createSlice({
    name:'userauth',
    initialState,
    reducers: {
        setCredentials:(state,action)=>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
            
        },
        logoutUser:(state,action) =>{
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        },
    }
})

export const {setCredentials,logoutUser} = userAuthSlice.actions;
export default userAuthSlice.reducer;