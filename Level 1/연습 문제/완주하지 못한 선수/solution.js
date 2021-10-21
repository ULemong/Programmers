function solution(participant, completion) {
    let answer = '';
    let i = 0;
    
    participant.sort();
    completion.sort();
    
    while(true) {
        if (participant[i] !== completion[i]) {
            answer += participant[i];
            break;
        }
        i++;
    }
    return answer;
}


/* another solution */
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
