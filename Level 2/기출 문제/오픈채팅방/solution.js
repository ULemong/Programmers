function solution(record) {
    let answer = [];
    let dic = {};
    let id = [];
    
    for (let i of record) {
        let arr = i.split(' '); 
        
        if (arr[0] === 'Enter' || arr[0] === 'Change') {
            dic[arr[1]] = arr[2];
            if (arr[0] === 'Enter') id.push(['Enter', arr[1]]);
        } else id.push(['Leave', arr[1]]);
    }
    
    for (let i of id) {
        if (i[0] === 'Enter') answer.push(`${dic[i[1]]}님이 들어왔습니다.`);
        else answer.push(`${dic[i[1]]}님이 나갔습니다.`);
    }
    // return id.map (i => {
    //     if (i[0] === 'Enter') return `${dic[i[1]]}님이 들어왔습니다.`;
    //     else return `${dic[i[1]]}님이 나갔습니다.`;
    // });

    return answer;
}

/* another solution_1. Hash */
function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") action.push([state, id]);

        if(nick) userInfo[id] = nick;
    });

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    });
}

/* another solution_2. Set */
function solution(record) {
    let answer = [];
    const uids = new Map();

    record.forEach(entry => {
        let [command, uid, nick] = entry.split(' ');
        if (command !== 'Leave') uids.set(uid, nick);
    })

    record.forEach(entry => {
        let [command, uid] = entry.split(' ');
        if (command === 'Enter') answer.push(`${uids.get(uid)}님이 들어왔습니다.`);
        else if (command === 'Leave') answer.push(`${uids.get(uid)}님이 나갔습니다.`);
    })

    return answer;
}
