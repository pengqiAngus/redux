const loggerMiddleware = (store) => (next) => (action) => {
  console.log("loggerMiddleware");
  let result = next(action);
  return result;
};

export default loggerMiddleware 