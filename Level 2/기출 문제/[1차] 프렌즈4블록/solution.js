function solution(m, n, board) {
  let answer = 0;
  let newBoard = board.map(v => v.split(''));

  while(true) {
    let zero = []; // 같은 블록의 개수를 구하기 위한 배열
    for (let i = 0; i < m; i++) zero.push(new Array(n).fill(1));
   
    // 같은 블록이면 해당 블록을 zero [0 -> 1]로 바꾼다
    for (let i = 0; i < m - 1; i++) { 
        for (let j = 0; j < n - 1; j++) {
            let now = newBoard[i][j] + newBoard[i][j + 1];
            let next = newBoard[i + 1][j] + newBoard[i + 1][j + 1];   
            
            if (now[0] !== ' ' && 
               (now[0] === now[1]) && (now[0] === next[0]) && (now[0] === next[1])) {
                zero[i][j] = 0;
                zero[i][j + 1] = 0;
                zero[i + 1][j] = 0;
                zero[i + 1][j + 1] = 0;
            }
        }
    }

    // 지워지는 블록 개수 (zero 배열 내 0의 개수)
    let sum = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (zero[i][j] === 0) sum++;
        }
    }
    if (sum === 0) break; // 더 이상 지울 블록이 없으면 break
     
    answer += sum;
    
    // 지워진 후 남아있는 블록을 임의로 담는 배열
    let temp = [];
    for (let i = 0; i < n; i++) {
        let arr = [];    
        for (let j = 0; j < m; j++) {
            if (zero[j][i] !== 0) {
                arr.push(newBoard[j][i])
            }
        }
        temp.push(arr.reverse())
    }
    
    // 위에 있는 블록이 아래로 떨어진 새로운 배열
    newBoard = [];
    for (let i = 0; i < m; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            if (!temp[j][i]) arr.push(' ');
            else arr.push(temp[j][i]);
        }
        newBoard.unshift(arr)
    }
  }

  return answer;
}

/* another solution */
function solution(m, n, board) {
    board = board.map(v => v.split(''));

    while (true) {
        let founded = [];

        // 같은 블록 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }
        
        // 같은 블록이 없다면, board 배열에서 0의 개수 반환
        if (! founded.length) return [].concat(...board).filter(v => ! v).length;

        // 같은 블록의 위치를 founded 배열에 담았다가 한번에 지우기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => ! v)) continue; // 아래 층부터 각 층의 요소 중 0이 하나도 없다면 (지워진 블록이 없다면) continue
            
            // 지워진 블록이 있다면
            for (let j = 0; j < n; j++) {
                // k -> i - 1 층부터 위 층으로 올라가며 확인 
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) { // k층에 남아있는 블록이 있다면 아래층의 빈 공간부터 채우기
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}
