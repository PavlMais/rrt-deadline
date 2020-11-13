import { Deadline, ADD_DEADLINE, DELETE_DEADLINE, DLActionTypes } from './types';



export function addDeadline(newDeadline: Deadline): DLActionTypes {
    return {
        type: ADD_DEADLINE,
        payload: newDeadline
    }
}

export function deleteDeadline(id: number): DLActionTypes {
    return {
        type: DELETE_DEADLINE,
        id: id
    }
}
