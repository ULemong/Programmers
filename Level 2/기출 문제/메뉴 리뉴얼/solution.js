function getCombination(arr, n, bucket) {
  let result = [];
  
    if (n === 0) {
        return bucket.join('');
    }

  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(i + 1);
    let pick = arr[i];

    let combination = getCombination(rest, n - 1, bucket.concat(pick));
    result.push(combination);
  }
    
  return result;
}

function solution(orders, course) {  
    let answer = [];
    
    for (let num of course) {
        let dic = {};
        
        for (let i of orders) {
            let sort = i.split('').sort();
            let combi = getCombination(sort, num, []).flat(num - 1);
            
            for (let menu of combi) {
                dic[menu] ? dic[menu]++ : dic[menu] = 1;
            }
        }
        
        let max = Math.max(...Object.values(dic));
        if (max === 1) continue;
        
        for (let i in dic) {
            if (dic[i] === max) answer.push(i);
        }
    }
    
    return answer.sort();
}
