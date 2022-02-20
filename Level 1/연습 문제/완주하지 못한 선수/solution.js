function solution(participant, completion) {
    let nameList = {};
    
    for (let name of participant) {
        nameList[name] ? nameList[name]++ : nameList[name] = 1;
    }
    
    for (let name of completion) {
        nameList[name]--;
    }
    
    for (let i in nameList) {
        if (nameList[i] !== 0) return i;
    }
}

/* another solution */
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
