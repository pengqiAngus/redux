let initCountState = {
    count: 0
}
export const countReducer = (state, action) => {
    if (state === undefined) {
        state = initCountState
    }
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + 1
            }
        case 'SUBTRACT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }   
}