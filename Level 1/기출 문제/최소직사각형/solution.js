function solution(sizes) {
    let max_w = 0;
    let max_h = 0;
    
    for (let i of sizes) {
        if (i[0] < i[1]) {
            let tmp = i[0];
            i[0] = i[1];
            i[1] = tmp;
        }
    }
    
    for (let i of sizes) {
        if (i[0] > max_w) {
            max_w = i[0];
        }
        if (i[1] > max_h) {
            max_h = i[1];
        }
    }
    
    return Math.max(max_w) * Math.max(max_h);
}
