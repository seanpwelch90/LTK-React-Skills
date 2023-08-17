import { configureStore } from '@reduxjs/toolkit'
import todoStore from './reducers/todoStore'

export default configureStore({
  reducer: {
    todoManager: todoStore,
  },
})