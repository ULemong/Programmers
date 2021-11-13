## [크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

### solution_1) forEach 사용
```javascript
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    moves.forEach(value => {
        for (let i = 0; i < board.length; i++) { 
            if (!board[i][value - 1]) continue; // 해당 칸이 0일 경우
            
            if (stack[stack.length - 1] === board[i][value - 1]) {
                board[i][value - 1] = 0;
                stack.pop();
                answer += 2;
                break;
            }
            
            stack.push(board[i][value - 1]);          
            board[i][value - 1] = 0;
            break;
        }
    });
    return answer;
}
```

### solution_2) 2중 for문 사용
```javascript
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let value = board[j][moves[i] - 1];    
            if (!value) continue;
            
            if (stack[stack.length - 1] === value) {
                board[j][moves[i] - 1] = 0;
                stack.pop();
                answer += 2;
                break;
            }
            
            stack.push(value);          
            board[j][moves[i] - 1] = 0;
            break;
        }
    }
    return answer;
}
```
