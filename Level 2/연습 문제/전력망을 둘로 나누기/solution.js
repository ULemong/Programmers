function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let visited = Array.from({ length: n + 1 }, () => 0);
  let count = 1;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(L) {
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0 && graph[L][i] === 1) {
        visited[L] = 1;
        count++;
        DFS(i);
        visited[L] = 0;
      }
    }
  }

  for (let [a, b] of wires) {
    graph[a][b] = 0;
    graph[b][a] = 0;
    count = 1;
    DFS(1);
    graph[a][b] = 1;
    graph[b][a] = 1;
    answer = Math.min(answer, Math.abs(n - count - count));
  }
  return answer;
}

/* another solution */
function solution(n, wires) {
  const g = Array.from({ length: n }, () => []);
  for (const e of wires) {
    g[e[0] - 1].push(e[1] - 1);
    g[e[1] - 1].push(e[0] - 1);
  }
  const p = new Array(n).fill(-1);
  const q = [0];
  for (let i = 0; i < q.length; ++i) {
    const u = q[i];
    for (const v of g[u])
      if (v != p[u]) {
        p[v] = u;
        q.push(v);
      }
  }
  let ans = n;
  const dp = new Array(n).fill(1);
  for (let i = q.length; --i > 0; ) {
    const v = q[i];
    dp[p[v]] += dp[v];
    let a = Math.abs(n - 2 * dp[v]);
    if (ans > a) ans = a;
  }
  return ans;
}
