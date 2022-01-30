function solution(n, results) {
  const graph = Array.from(Array(n), () => Array(n).fill(Infinity));
  let answer = 0;

  for (const result of results) {
    const [win, lose] = result;
    graph[win - 1][lose - 1] = 0;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (graph[i][k] === Infinity) continue;
      for (let j = 0; j < n; j++) {
        if (i === k || j === k || graph[k][j] === Infinity) continue;
        if (graph[i][j] > graph[i][k] + graph[k][j])
          graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }

  graph.map((arr, idx) => {
    let count = 0;

    arr.map((v) => {
      if (v === 0) count++;
    });

    for (let i = 0; i < n; i++) {
      if (i === idx) continue;
      if (graph[i][idx] === 0) count++;
    }
    if (count === n - 1) answer++;
  });

  return answer;
}

/* another solution */
function solution(n, results) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
  results.forEach(([win, lose]) => {
    graph[win][lose] = 1;
    graph[lose][win] = -1;
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        }
        if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1;
        }
      }
    }
  }
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let flag = true;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === false) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
