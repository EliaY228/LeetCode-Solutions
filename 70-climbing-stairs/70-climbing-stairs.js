var climbStairs = function(n) {
  if (n < 3) return n;
  
  let curr = 3, prev = 2, prev2 = 1
  for (let i = 3; i <= n;i++) {
    curr = prev + prev2;
    prev2 = prev;
    prev = curr;
  }
  return curr;
};