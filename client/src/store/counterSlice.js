import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'user',
    todo:null,
    initialState: {
        user: null,
    },
    reducers: {
        userDetails: (state, action)=>{
            state.user= action.payload
        },
        userTodo: (state, action)=>{
            state.todo= action.payload
        }
    },
})


export const {userDetails,userTodo } = counterSlice.actions

export default counterSlice.reducer