function solution(n) {
    let answer = [];
    let n_s = String(n);
    
    answer = n_s.split('').map(Number).reverse();
    
    return answer;
}
