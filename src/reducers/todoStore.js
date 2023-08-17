import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todoManager',
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      //action.payload should be todo Item
      state.value.push(action.payload)
    },
    removeTodo: (state, action) => {
      //action.payload should be array element we want to remove
      state.value.splice(action.payload, 1)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer