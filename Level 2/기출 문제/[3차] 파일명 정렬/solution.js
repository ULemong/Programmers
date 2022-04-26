function solution(files) {
    let answer = [];
    const numRegex = /\d+/
 
    answer = files.sort((a, b) => {
        const [matchA, matchB] = [a.match(numRegex), b.match(numRegex)]
        const [headA, headB] = [a.slice(0, matchA.index).toLowerCase(), b.slice(0, matchB.index).toLowerCase()]
        const [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])]
        if(headA < headB) return -1;
        if(headA > headB) return 1;
        if(numberA < numberB) return -1;
        if(numberA > numberB) return 1;
        else return 0;
    })
    
    return answer;
}

/* another solution_1 */
function solution(files) {
  const pattern = /(\D+)(\d+)/;

  return files.sort((a, b) => {
    let [aHead, aNumber] = a.match(pattern).slice(1, 3);
    let [bHead, bNumber] = b.match(pattern).slice(1, 3);
      
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();
      
    if (aHead === bHead && aNumber === bNumber) return 0;
    if (aHead > bHead) return 1;
    if (aHead === bHead) return aNumber - bNumber; // string 사칙연산: string => number로 자동 형 변환
    else return -1;
      
    // aNumber = parseInt(aNumber)
    // bNumber = parseInt(bNumber)
      
    // if(aHead < bHead) return -1;
    // if(aHead > bHead) return 1;
    // if(aNumber < bNumber) return -1;
    // if(aNumber > bNumber) return 1;
    // else return 0
  });
}

/* another solution_2 */
function solution(files) {
    const strRegex = /\D+/;
    const numRegex = /\d+/;
    return files.sort((a, b) => {    
        const headA = a.match(strRegex)[0].toLowerCase();
        const headB = b.match(strRegex)[0].toLowerCase();
        
        if (headA < headB) return -1;
        if (headA > headB) return 1;
        
        // head 값이 같다면
        const numberA = a.match(numRegex)[0].replace(/^0+/, ''); // 0으로 시작하며, 0이 연속 => ''
        const numberB = b.match(numRegex)[0].replace(/^0+/, '');
        // const numberA = parseInt(a.match(numRegex)[0]);
        // const numberB = parseInt(b.match(numRegex)[0]);

        return numberA - numberB
        
    });
}
