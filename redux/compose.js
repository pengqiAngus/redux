export default (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg
    } else if (funcs.length === 1) {
        return funcs[0]
    }
    // return funcs.reduce((a, b) => (...args) => a(b(...args)))
    
    return funcs.reduce((a, b) => {
        return (...args) => {
             return a(b(...args))
         }
    })
}
