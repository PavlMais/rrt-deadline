import { Switch } from '@blueprintjs/core';
import { act } from 'react-dom/test-utils';
import { MState, DLActionTypes, ADD_DEADLINE, DELETE_DEADLINE, Deadline } from './types';


const initialState: MState = {
    deadlines: []
}

export function deadlineReducer(state = initialState, action: DLActionTypes): MState {
    switch (action.type) {
        case ADD_DEADLINE:
            return{
                deadlines: [...state.deadlines, action.payload]
            }
        case DELETE_DEADLINE:
            return{
                deadlines: state.deadlines.filter(
                    dl => dl.title === action.id.toString()
                )
            }
        default:
            return state
    }
}
