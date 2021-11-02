function solution(d, budget) {
    let answer = 0;
    
    d.sort((x, y) => x - y);
    
    for (let i of d) {
        if (i > budget) break;
        
        budget -= i;
        answer++;
    }
    
    return answer;
}
