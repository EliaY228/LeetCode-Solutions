var getMoneyAmount = function(n) {
   const dp = Array(n).fill('').map(_ => Array(n).fill(0));
	const dfs = (start, end) => {
		if (start >= end) return 0;
		if (dp[start][end] > 0) return dp[start][end];
		let min = Infinity;

		for (let i = start; i <= end; i++) {
			const money = i + 1;
			const left = dfs(start, i - 1);
			const right = dfs(i + 1, end);
			const amount = money + Math.max(left, right);
			min = Math.min(min, amount);
		}
		return dp[start][end] = min;
	};

	return dfs(0, n - 1);
};