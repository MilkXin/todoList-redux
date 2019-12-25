import { CHANGE_VALUE, ADD, DEL } from './actionTypes'

export const inputChangeAction = (value) => ({
    type: CHANGE_VALUE,
    value
})

export const addAction = () => ({
    type: ADD
})

export const delAction = (index) => ({
    type: DEL,
    index
})