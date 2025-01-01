function bindActionCreatorsHandler(actionCreators, dispatch) {
  return function () {
    return dispatch(actionCreators(...arguments));
  };
}

export default function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for (const key in actionCreators) {
        const actionCreator = actionCreators[key];
        boundActionCreators[key] = bindActionCreatorsHandler(actionCreator, dispatch);
 
    }
    return boundActionCreators;
}