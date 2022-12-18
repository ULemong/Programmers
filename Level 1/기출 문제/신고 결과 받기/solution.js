function solution(id_list, report, k) {
    const reportSet = [...new Set(report)];
    const reportCount = {};
    const reportId = [];
    const result = {};

    id_list.forEach(id => {
        reportCount[id] = 0;
        result[id] = 0;
    });

    reportSet.forEach(v => {
        let arr = v.split(' ');
        reportCount[arr[1]]++;
    });

    for (const key in reportCount) {
        if (reportCount[key] >= k) reportId.push(key);
    }

    reportSet.forEach(v => {
        let arr = v.split(' ');
        if (reportId.includes(arr[1])) result[arr[0]]++;
    });

    return Object.values(result);
}

/* another solution */
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a => good.get(a) || 0)
    return answer;
}
