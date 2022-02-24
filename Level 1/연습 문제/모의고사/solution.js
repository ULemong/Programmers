function solution(answers) {
    var answer = [];
    let supo = [
                [1, 2, 3, 4, 5]
                , [2, 1, 2, 3, 2, 4, 2, 5]
                , [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
               ]

    answer[0] = answers.filter( (a, i) => a === supo[0][i % 5] ).length;
    answer[1] = answers.filter( (a, i) => a === supo[1][i % 8] ).length; 
    answer[2] = answers.filter( (a, i) => a === supo[2][i % 10] ).length;

    let result = [];
    const max = Math.max(... answer);
    for(let k = 0; k < answer.length; k++){
        if(max === answer[k])
            result.push(k+1);
    }
    return result;
}
