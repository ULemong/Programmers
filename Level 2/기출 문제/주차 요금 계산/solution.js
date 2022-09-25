function solution(fees, records) {
    let answer = [];
    let obj = {};
    
    // 시간 계산
    const calcTime = (time) => {
        let [hour, minute] = time.split(':');
        return Number(hour * 60) + Number(minute);
    };
    
    // 주차 요금 계산
    const calcFee = (totalTime) => {
        if (totalTime <= fees[0]) {
            return fees[1];
        } else {
            return fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
        }
    };
    
    records.forEach(record => {
        let [time, carNum, state] = record.split(' ');
        
        // 출입 기록이 있는 경우
        if (obj[carNum]) {
            if (state === 'IN') {
                obj[carNum] = {
                    ...obj[carNum],
                    time: calcTime(time), 
                    state, 
                }
            } else {
                obj[carNum] = {
                    ...obj[carNum], 
                    totalTime: obj[carNum].totalTime + (calcTime(time) - obj[carNum].time),
                    state,
                }
            }
        } 
        
        // 출입 기록이 없는 경우
        else {
            obj[carNum] = {
                time: calcTime(time),
                state,
                totalTime: 0,
            }
        }
    });
    
    for (const carNum in obj) {
        if (obj[carNum].state === 'IN') {
            const totalTime = obj[carNum].totalTime + (1439 - obj[carNum].time)
            answer.push([carNum, calcFee(totalTime)])  
        } else {
            answer.push([carNum, calcFee(obj[carNum].totalTime)]);
        }
    }
    
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
