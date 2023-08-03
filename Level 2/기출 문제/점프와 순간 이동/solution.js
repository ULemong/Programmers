function solution(n) {
    let answer = 0;
    
    while (n > 0) {
        if (n % 2 === 1) {
            answer++;
            n -= 1;
        } else {
            n /= 2;
        }
    }

    return answer;
}

/* another solution */
function solution(n) {
    return n.toString(2).match(/1/g).length;
}
