import { combineReducers } from '@reduxjs/toolkit'
import { deadlineReducer } from './reducers'

const rootReducer = combineReducers({
    deadline: deadlineReducer
})


export type RootState = ReturnType<typeof rootReducer>