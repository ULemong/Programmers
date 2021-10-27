function solution(n) {   
    let answer = 0;
    let n_s = String(n);
    
    for (let i of n_s) answer += parseInt(i);
    
    return answer;
}
