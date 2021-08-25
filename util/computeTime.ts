export function timeHelper<Params, Result>(
  fn: (...args: Params[]) => Result
): Function {
  return (...args: Params[]) => {
    const startTime = Date.now();
    const ret = fn(...args);
    const endTime = Date.now();
    const timeConsuming = ((endTime - startTime) / 1000).toFixed(4);
    console.log(`${fn.name}: ${timeConsuming}`);
    return ret;
  };
}
