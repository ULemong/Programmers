function solution(a, b) {
    let sum = 0;
    
    if (a > b) [a, b] = [b, a];
    
    for (let i = a; i <= b; i++) {
            sum += i;
    }
  return sum;
}

/* another solution */
function solution(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2; // 가우스 공식
}
