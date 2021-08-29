export function bruteforce(
  profits: number[],
  weights: number[],
  capacity: number
) {
  const recursive = (i: number, c: number, p: number): number => {
    if (i >= profits.length) return p;

    return Math.max(
      c + weights[i] > capacity
        ? p
        : recursive(i + 1, c + weights[i], p + profits[i]),
      recursive(i + 1, c, p)
    );
  };

  const ans = recursive(0, 0, 0);
  return ans;
}

export function topDown(
  profits: number[],
  weights: number[],
  capacity: number
) {
  const dp: Record<string, number> = {};

  const recursive = (i: number, c: number, p: number): number => {
    if (i >= profits.length) return p;

    const key = `${i}_${c}`;

    if (dp[key]) {
      return dp[key];
    }

    const ans = Math.max(
      c - weights[i] >= 0
        ? recursive(i + 1, c - weights[i], p + profits[i])
        : p,
      recursive(i + 1, c, p)
    );

    return (dp[key] = ans);
  };

  const ans = recursive(0, capacity, 0);
  return ans;
}

export function bottomUp(
  profits: number[],
  weights: number[],
  capacity: number
) {
  const N = profits.length;
  const dp: number[][] = new Array(N)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  // 初始化
  for (let i = 0; i < N; i++) dp[i][0] = 0;
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) dp[0][c] = profits[0];
  }

  // dp
  for (let i = 1; i < N; i++) {
    for (let c = 1; c <= capacity; c++) {
      dp[i][c] = Math.max(
        dp[i - 1][c],
        c < weights[i] ? 0 : profits[i] + dp[i - 1][c - weights[i]]
      );
    }
  }

  return dp[N - 1][capacity];
}

export function bottomUp2(
  profits: number[],
  weights: number[],
  capacity: number
) {
  const N = profits.length;
  const dp: number[] = new Array(capacity + 1).fill(0);

  // 初始化
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) dp[c] = profits[0];
  }

  // dp
  for (let i = 1; i < N; i++) {
    for (let c = capacity; c >= 0; c--) {
      dp[c] = Math.max(
        dp[c],
        c < weights[i] ? 0 : profits[i] + dp[c - weights[i]]
      );
    }
  }

  return dp[capacity];
}
