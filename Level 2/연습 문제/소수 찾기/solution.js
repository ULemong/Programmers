function solution(numbers) {
  let answer = 0;
  
  // 순열
  let arr = numbers.split('');
  let result = [];

  function permutation(arr, n, bucket) {
    if (n === 0) {
      result.push(parseInt(bucket.join('')));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let rest = arr.slice();
      let pick = rest.splice(i, 1);
      permutation(rest, n - 1, bucket.concat(pick));
    }
      
    return result;
  }

  for (let i = 0; i < numbers.length; i++) {
    permutation(arr, i + 1, []);
  }
  
  let num = [...new Set(result)];
  
  // 소수
  function isPrime(num) {
    if(num === 2) return true;
    if(num === 0 || num === 1) return false;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) return false;
    }

    return true; 
  }
  
  for (let i = 0; i < num.length; i++) {
    if (isPrime(num[i])) answer++;
  }
  
  return answer;
}


/* 함수 분리 */
// 순열 구하기
function getPermutation(arr, n, bucket) {
    let result = [];
    
    if (n === 0) return bucket;
    
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice();
        let pick = rest.splice(i, 1);
        
        let permutation = getPermutation(rest, n - 1, bucket.concat(pick));
        result.push(permutation);
    }
    
    return result;
}

// 소수 구하기
function isPrime(num) {
    if(num === 0 || num === 1) return false;
    if(num === 2) return true;
   
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0) return false;
    }

    return true; 
}

function solution(numbers) {
    let answer = 0;
    let input = numbers.split('').map(Number);
    let arr = [];
    
    for (let i = 1; i <= numbers.length; i++) {
        getPermutation(input, i, []).flat(i - 1)
                                    .map(v => arr.push(parseInt(v.join(''))));
    }
    
    let newArr = [...new Set(arr)];   
    newArr.forEach(v => {
        if (isPrime(v)) answer++;
    })
    
    return answer;
}
