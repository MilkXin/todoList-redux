const defaultState = {
    inputValue: '',
    list: [
        '开会',
        '敲代码',
        '改bug'
    ]
}

export default (state = defaultState, action) => {
    if (action.type === 'changeValue') {
        const newState = {...state}
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'add') {
        const newState = { ...state }
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === 'del') {
        const newState = { ...state }
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}