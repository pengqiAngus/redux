export default function combineReducers(reducers) {
    const reducersKeys = Object.keys(reducers);
    return function (state = {}, action) {
        const nextState = {};
        for (let i = 0; i < reducersKeys.length; i++) {
            const key = reducersKeys[i];
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
        }
            return nextState;
    }
}