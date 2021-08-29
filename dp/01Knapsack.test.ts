import { bottomUp, bottomUp2, bruteforce, topDown } from "./01Knapsack";

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

it("bruteforce", () => {
  expect(bruteforce(profits, weights, 7)).toBe(22);
  expect(bruteforce(profits, weights, 6)).toBe(17);
  expect(topDown(profits, weights, 7)).toBe(22);
  expect(topDown(profits, weights, 6)).toBe(17);
  expect(bottomUp(profits, weights, 7)).toBe(22);
  expect(bottomUp(profits, weights, 6)).toBe(17);
  expect(bottomUp2(profits, weights, 7)).toBe(22);
  expect(bottomUp2(profits, weights, 6)).toBe(17);
});
