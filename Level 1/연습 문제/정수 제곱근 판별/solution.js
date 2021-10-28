function solution(n) {
    let answer = 0;
    n = Math.sqrt(n);
    
    answer = (n === parseInt(n)) ? Math.pow(n + 1, 2) : -1;
    
    return answer;
}
