function solution(n, edge) {
    const visited = Array.from(Array(n + 1).fill(0));
    const level = Array.from(Array(n + 1).fill(0));
    
    const bfs = (start, arr) => {
        const queue = [start];
        visited[start] = 1;

        while (queue.length) { 
            const node = queue.shift();
            const currentLevel = level[node] + 1; 

            for (let vertex of edge) {
                if (vertex[0] === node && !visited[vertex[1]]) {
                    queue.push(vertex[1]);
                    visited[vertex[1]] = 1;
                    level[vertex[1]] = currentLevel;
                } else if (vertex[1] === node && !visited[vertex[0]]) { 
                    queue.push(vertex[0]);
                    visited[vertex[0]] = 1;
                    level[vertex[0]] = currentLevel;
                }
            }
        } 
    };
    
    bfs(1, edge);
    
    const max = Math.max(...level);
    return level.filter((i) => i === max).length;
}

/* another solution */
function solution(n, vertex) {
  const graph = Array.from(Array(n + 1), () => []);
  vertex.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const visited = Array(n + 1).fill(false);
  const queue = [];

  queue.push([1, 0]);
  visited[1] = 0;

  while (queue.length) {
    let [to, cost] = queue.shift();

    graph[to].map(nextNode => {
      const nextCost = cost + 1;
      if (visited[nextNode] === false) {
        visited[nextNode] = nextCost;
        queue.push([nextNode, nextCost]);
      }
    });
  }

  const max = Math.max(...visited);
  return visited.filter(v => v === max).length;
}
