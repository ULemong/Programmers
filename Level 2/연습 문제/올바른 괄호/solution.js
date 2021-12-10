function solution(s){
    let stack = [];
    
    for (let i of s) {
        if (i === '(') stack.push(i);
        else if (i === ')') {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return stack.length ? false : true
}
