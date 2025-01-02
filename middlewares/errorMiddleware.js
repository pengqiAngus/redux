const  errorMiddleware = (store) => (next) => {
  return (action) => {
    try {
      console.log("errorMiddleware");
      return next(action);
    } catch (e) {
      console.log("error", e);
      // throw e;
    }
  };
};
export default errorMiddleware