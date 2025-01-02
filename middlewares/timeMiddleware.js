const timeMiddleware = (store) => (next) => (action) => {
  console.log("time", new Date().toLocaleTimeString());
  return next(action);
};
export default timeMiddleware 