import compose from './compose.js'

export default function applyMiddleware(...middlewares) {
    return function  (oldCreateStore) {
        return  function createStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState);
            const simpleStore = {getState: store.getState};
            const chain = middlewares.map((middleware) => middleware(store));
            const dispatch = compose(...chain)(store.dispatch);
            return {
              ...store,
              dispatch,
            };
        }
    }
}