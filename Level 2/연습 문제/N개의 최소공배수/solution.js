/* 초반 코드 */
function solution(arr) {
    let n = 0;
    let max = Math.max(...arr);
    let lastNum = arr[arr.length - 1];
    
    while(true) {
        n++;
        let num = max * n;
        
        for (let i of arr) {
            if (num % i !== 0) break;
            
            if (i === lastNum) return num; // [2, 4, 7, 4] -> 같은 값이 2개 이상이며 lastNum과 같을 경우 바로 return
                                           // 따라서 값이 아닌 index로 접근해야 함          
        }
    }
}

/* 정답 코드 */
function solution(arr) {
    let n = 0;
    let max = Math.max(...arr);
    let len = arr.length;
    
    while(true) {
        n++;
        let num = max * n;
        
        for (let i = 0; i < len; i++) {
            if (num % arr[i] !== 0) break;
            
            if (i === len - 1) return num;        
        }
    }
}
