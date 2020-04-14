export function timeHelper(fn: Function): Function {
  return (...args) => {
    const startTime = Date.now();
    const ret = fn.apply(this, args);
    const endTime = Date.now();
    const timeConsuming = ((endTime - startTime) / 1000).toFixed(4);
    console.log(`${fn.name}: ${timeConsuming}`);
    return ret;
  };
}
