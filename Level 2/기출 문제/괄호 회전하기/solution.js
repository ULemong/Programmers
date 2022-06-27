function solution(s) {
    const len = s.length; 
    let answer = 0;
    
    if (len % 2 !== 0) return 0;
    
    for (let i = 0; i < len; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        
        for (const j of rotate) {
            if (j === '(' || j === '[' || j === '{') stack.push(j)
            else {
                if (j === ')' && stack[stack.length - 1] === '(') stack.pop();
                else if (j === ']' && stack[stack.length - 1] === '[') stack.pop();
                else if (j === '}' && stack[stack.length - 1] === '{') stack.pop();
                else stack.push(j);
            }
        }
        
        if (stack.length === 0) answer++;
    }
    
    return answer;
}

/* another solution */
function solution(s) {
    let answer = 0;
    const len = s.length; 
    const mapping = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
    
    if (len % 2 !== 0) return 0;
    
    for (let i = 0; i < len; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;
        
        for (const j of rotate) {
            if (j === '(' || j === '[' || j === '{') stack.push(j)
            else {
                const last = stack.pop();
                if (mapping[last] !== j) {
                    flag = false;
                    break;
                }
            }
        }
        
        if (flag) answer++;
    }
    
    return answer;
}
