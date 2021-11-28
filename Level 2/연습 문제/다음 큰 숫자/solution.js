function solution(n) {
    let sum = 0;
    let binary = n.toString(2);
    
    for (let i of binary) sum += parseInt(i);
    
    while (true) {
        n++;
        let new_sum = 0;
        binary = n.toString(2);
        for (let i of binary) new_sum += parseInt(i);
        if (new_sum === sum) return n;
    }
}

/* another solution_1 정규표현식 */
function solution(n) {
    const len = n.toString(2).match(/1/g).length;
    while(n++) 
        if (len === n.toString(2).match(/1/g).length) return n;
}

/* another solution_2 정규표현식 & 재귀 함수 */
function solution(n, answer = n + 1) {
    return (n.toString(2).match(/1/g).length === answer.toString(2).match(/1/g).length) ? answer : solution(n, answer + 1);
}
