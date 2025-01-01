export const timeMiddleware = (store) => (next) => (action) => {
  console.log('time', new Date().toLocaleTimeString());
  return next(action);
}

export const loggerMiddleware = (store) => (next) => (action) => {
    console.log("loggerMiddleware");
  let result = next(action);
  return result;
}

export const errorMiddleware = (store) => (next) => {
    return (action) => {
      try {
        console.log("errorMiddleware");
        return next(action);
      } catch (e) {
        console.log("error", e);
        // throw e;
      }
    };
} 
