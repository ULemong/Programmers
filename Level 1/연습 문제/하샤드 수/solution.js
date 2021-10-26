function solution(x) {
    let answer = 0;
    let x_s = String(x);

    for (let i = 0; i < x_s.length; i++) {
        answer += parseInt(x_s[i]);
    }

    return (x % answer) ? false : true;
}
