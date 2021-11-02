function solution(N, stages) {
    let answer = [];
    let arr = [];
    
    stages.sort((x, y) => x - y);
    
    let len = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let user = stages.filter(stage => stage === i);     
        let fail = user.length / len;

        arr.push([fail, i]);
 
        len -= user.length;
    }
 
    arr.sort((x, y) => y[0] - x[0]);
    arr.map(x => answer.push(x[1]));

    return answer;
}
