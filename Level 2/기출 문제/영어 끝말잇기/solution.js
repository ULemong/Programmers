function solution(n, words) {
    let number = 1;
    let count = 1;
    let hash = {};
    
    for (let i = 0; i < words.length; i++) {
        /* number = (i + 1) % n ? (i + 1) % n : n; 
                  = (i % n) + 1 
        */
        /* count = Math.ceil((i + 1) / n); 
                 = Math.floor(i / n) + 1 
        */
      
        // 올바른 끝말잇기 확인
        if (!(number === 1 && count === 1)) {
            let prevWord = words[i - 1];
            let last = prevWord[prevWord.length - 1];
              
            if (last !== words[i][0]) return [number, count];
        }
        
        // 이미 말한 단어인지 확인
        if (hash[words[i]]) return [number, count];
        else hash[words[i]] = 1;
        
        if (number % n === 0) {
            number = 1;
            count++;
        } else number++;           
    }

    return [0, 0];
}

/* another solution. reduce() */
function solution(n, words) {
    let answer = 0;   
    words.reduce((prev, now, idx) => {
        /* words.slice(0, idx).indexOf(now) !== -1 // 이미 말한 단어인지 확인 (이미 말한 단어 -> true 반환)  */      
        /* prev !== now[0] // 올바른 끝말잇기인지 확인 (올바르지 X -> true 반환) */
           
        // 위 2가지 조건 중 하나라도 true (탈락자 존재) -> idx 반환 (탈락자의 index) -> answer !== 0
        
        // prev = '', now = words[0] -> answer = idx = 0 이므로 변화 X
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        // answer || (...) -> 탈락자가 여러명이도, 첫번째 탈락자를 반환해야되기 때문)
         
        return now[now.length-1];
        // reduce 함수 -> return 값을 prev에 업데이트 (prev = now[now.length-1])
    }, '')
    
    return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
