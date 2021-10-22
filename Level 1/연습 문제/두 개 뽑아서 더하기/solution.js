function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(answer)];
    answer.sort((x,y) => x - y);
    
    return answer;
}
