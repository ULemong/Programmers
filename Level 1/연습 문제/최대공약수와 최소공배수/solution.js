function solution(n, m) {
    let answer = [];
    
    let max = Math.max(n, m);
    let min = Math.min(n, m);
    let t = 1;
    
    while (t > 0) {
        t = max % min;
        max = min
        min = t;
    }
    
    answer.push(max, parseInt(n*m / max));

    return answer;
}
