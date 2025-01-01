export default function createStore(reducer, middleWares, initState) {
  if (middleWares) {
    // 拦截dispatch并重写
      const newCreateStore = middleWares(createStore);
    return newCreateStore(reducer);
  }
  let state = initState || [];
  let listeners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
    
  const replaceReducer = (nextReducer) => {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  };
    dispatch({ type: Symbol() });

  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer,
  };
}
