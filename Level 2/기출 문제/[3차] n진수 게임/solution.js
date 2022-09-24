function solution(n, t, m, p) {
    let answer = ''
    let num = ''

    // n진수 문자열
    for (let i = 0; num.length < t * m; i++) {
        num += i.toString(n).toUpperCase();
    } 
    
    // result 구하기
    for (let i = p; answer.length < t; i += m) {
        answer += num[i - 1];
    }
    
    /* while문 사용하기 */
    // let i = 0;
    // while (true) {
    //     num += i.toString(n).toUpperCase();
    //     i++;

    //     if (num.length >= t * m) break;
    // }    

    // while (true) {
    //     answer += num[p - 1];
    //     p += m;

    //     if (answer.length === t) break;
    // }
    
    return answer;
}
