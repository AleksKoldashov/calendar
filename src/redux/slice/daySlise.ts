import { createSlice } from "@reduxjs/toolkit";
const num = localStorage.getItem('count')as string
interface CounterState {
    day: number
  }
const initialState: CounterState={
    day: 0 
}satisfies CounterState as CounterState



export  const daySlise=createSlice({
name: 'lesson',
initialState,
reducers:{
    update: (state, action)=>{
        state.day = action.payload
    },
  
}

})

export const{
    update,
}=daySlise.actions

export default daySlise.reducer