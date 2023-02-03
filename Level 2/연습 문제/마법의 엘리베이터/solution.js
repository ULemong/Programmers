function solution(storey) {
  const answer = Number.MAX_SAFE_INTEGER;
  
  function dfs(num, counter) {
    if (counter >= answer) return;
    if (num === 0) answer = counter;
    else {
      const res = num % 10;
      dfs(Math.floor(num / 10), counter + res);
      dfs(Math.floor(num / 10) + 1, counter + 10 - res);
    }
  }
  
  dfs(storey, 0);
  return answer;
}
