function solution(numbers) {
    let answer = 0;
    
    numbers.sort((x, y) => x - y);
    
    for (let i = 1; i <= 9; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    return answer;
}
