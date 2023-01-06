function solution(n, left, right) {
    const answer = [];

    while (left <= right) {
        answer.push(Math.max(Math.floor(left / n), left++ % n) + 1);
    }

    return answer;
}
