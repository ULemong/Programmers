function solution(n) {
    let n_s = String(n);    
    n_s = n_s.split('').sort((x, y) => y - x);
  
    let answer = parseInt(n_s.join(''));
    
    return answer
}
