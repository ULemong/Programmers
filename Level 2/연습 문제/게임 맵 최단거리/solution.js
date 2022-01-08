function solution(maps) {
  const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y, visited) => {
    const queue = [];
    queue.push({ x, y });
    visited[x][y] = 1;

    while (queue.length) {
      const { x, y } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          visited[nx][ny] === 0 &&
          maps[nx][ny] === 1
        ) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push({ x: nx, y: ny });
        }
      }
    }
  };

  bfs(0, 0, visited);
  return visited[maps.length - 1][maps[0].length - 1] ? visited[maps.length - 1][maps[0].length - 1] : -1;
}
