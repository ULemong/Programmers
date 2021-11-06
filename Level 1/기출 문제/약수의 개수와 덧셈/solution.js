function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) sum++;
        }
        answer += (sum % 2 === 0) ? i : -i;
    }
    return answer;
}
