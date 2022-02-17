function solution(citations) {
    citations.sort((x, y) => y - x);
    let max = citations[0];

    while (true) {
        let count = 0;
        for (let i = 0; i < citations.length; i++) {
            if (max > citations[i]) break;
            count++;
        }
        
        if (count >= max) return max;
        max--;
    }
}

/* another solution */
function solution(citations) {
     citations = citations.sort((x, y) => y - x);
     let i = 0;
     while(i + 1 <= citations[i]) i++;
    
     return i;
}
