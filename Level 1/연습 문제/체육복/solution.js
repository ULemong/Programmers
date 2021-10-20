function solution(n, lost, reserve) {
    let losted = lost.filter(x => !reserve.includes(x));
    let reserved = reserve.filter(x => !lost.includes(x));
    let answer = n - losted.length;
    
    losted.sort((x, y) => x - y);
    
    let db = {};
    for (let i = 0; i < reserved.length; i++) {
        db[reserved[i]] = true;
    }
    
    for (let i = 0; i < losted.length; i++) {
        if (db[losted[i] - 1]) {
            answer++;
            db[losted[i] - 1] = false;
        } else if (db[losted[i] + 1]) {
            answer++;
            db[losted[i] + 1] = false;
        }
    }
    return answer;
}
