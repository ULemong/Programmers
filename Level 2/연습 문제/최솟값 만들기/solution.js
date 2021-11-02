function solution(A,B){
    let answer = 0;
    
    A.sort((x, y) => x - y);
    B.sort((x, y) => y - x);
    
    for (let i in A) {
        answer += A[i] * B[i];
    }
    
    return answer;
}
