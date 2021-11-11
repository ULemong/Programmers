function solution(s){
    let p = 0, y = 0;
    let lower = s.toLowerCase();
    
    for(let i of lower){
      if(i === 'p') p++;      
      else if(i === 'y') y++;
    }
    
    return (p === y) ? true : false;
}
