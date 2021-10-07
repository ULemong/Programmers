function solution(arr, divisor) {
    let answer = [];
    
    for (let i of arr) {
        if (i % divisor === 0) {
            answer.push(i);
        }
    }
    return (answer.length) ? answer.sort((x, y) => x - y) : [-1];
}

/* another solution */
function solution(arr, divisor) {
    let answer = arr.filter(n => n % divisor == 0);
    return (answer.length) ? answer.sort((x, y) => x - y) : [-1];
}
