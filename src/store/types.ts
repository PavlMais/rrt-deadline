
export interface Deadline{
    title: string
}

export interface MState{
    deadlines: Deadline[]
}


export const ADD_DEADLINE = 'ADD_DEADLINE'
export const DELETE_DEADLINE = 'DELETE_DEADLINE'

interface AddDeadlineAction {
    type: typeof ADD_DEADLINE
    payload: Deadline
}

interface DeleteDeadlineAction{
    type: typeof DELETE_DEADLINE,
    id: number
}

export type DLActionTypes = AddDeadlineAction | DeleteDeadlineAction