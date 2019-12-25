import { CHANGE_VALUE, ADD, DEL } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [
        '开会',
        '敲代码',
        '改bug'
    ]
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_VALUE) {
        const newState = {...state}
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD) {
        const newState = { ...state }
        if (!state.inputValue) {
            return
        }
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === DEL) {
        const newState = { ...state }
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}