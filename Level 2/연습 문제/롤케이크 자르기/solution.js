function solution(topping) {
    const left = {};
    const right = topping.reduce((acc, v) => {
        acc[v] = (acc[v] ?? 0) + 1;
        return acc;
    }, {});
    
    let leftCount = 0;
    let rightCount = new Set(topping).size;
    let answer = 0;
    
    for (let i = 0; i < topping.length - 1; i++) {
        const curTopping = topping[i];
        if (!left[curTopping]) {
            leftCount++;
        }
        left[curTopping] = (left[curTopping] ?? 0) + 1;
        
        right[curTopping]--;
        if (!right[curTopping]) {
            rightCount--;
        }
        
        if (leftCount === rightCount) {
            answer++;
        }
    }
    
    return answer;
}
