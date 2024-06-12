import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    day: number,
    less: unknown []
  }
const initialState: CounterState={
    day: 0,
    less: []
} satisfies CounterState  as CounterState



export  const daySlise=createSlice({
name: 'lesson',
initialState,
reducers:{
    update: (state, action)=>{
        state.day = action.payload
    },
    update_lesson: (state, action)=>{
       console.log(action.payload);
       state.less=[...state.less,action.payload]
    },
  
}

})

export const{
    update,
    update_lesson,
}=daySlise.actions

export default daySlise.reducer