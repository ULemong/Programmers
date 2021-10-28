function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.filter(value => value !== min);
    
    if (answer.length === 0) answer = [-1];
    
    return answer;
}
