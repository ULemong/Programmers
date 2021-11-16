function solution(n) {
    let answer = 1; // n인 경우
      
    for (let i = 1; i <= n; i++) {
        let sum = i;
        if (sum === n) return answer;
        
        for (let j = i + 1; j <= n; j++) {
            if (sum + j > n) break;
            if (sum + j === n) {
                answer++;
                break;
            }
            sum += j;
        }
    }
    return answer;
}
