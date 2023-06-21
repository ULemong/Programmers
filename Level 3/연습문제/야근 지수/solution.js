function solution(n, works) {
  if(works.reduce((a,b) => a+b) <= n) return 0;
  
  let sorted = works.sort((a,b) => a-b);
  const len = works.length;
  
  while(n) {
    const max = sorted[len-1];
    
    for(let i = len-1; i >= 0; i--) {
      if(sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if(!n) break;
    }
  }
  
  return sorted.reduce((a,b) => a + Math.pow(b, 2), 0);
}

/* another solution */
const noOvertime = (no, works) => {
    while ( no > 0 ) {
        works.sort((a,b) => b-a);
        works[0] -= 1;
        no--;
    }
    return works.map(a => a*a).reduce((a,b) => a+b);
}
