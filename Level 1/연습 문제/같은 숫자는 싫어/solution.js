function solution(arr)
{
    let answer = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    answer.push(arr[arr.length - 1]);
    
    return answer;
}

/* another solution */
function solution(arr)
{
    return arr.filter((v, i) => v !== arr[i + 1]);
}
