// 조합 구하기
function getCombination(arr, n, bucket) {
    let result = [];
    
    if (n === 0) return bucket;
    
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(i + 1);
        let pick = arr[i];
        
        let combination = getCombination(rest, n - 1, bucket.concat(pick));
        result.push(combination);
    }
    
    return result;
}

// 소수 구하기
function isPrime(num) {
    if (num === 0 || num === 1) return false;
    if (num === 1) return true;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0 ) return false;
    }
    
    return true;
}

function solution(nums) {
    let answer = 0;
    let arr = getCombination(nums, 3, []).flat(2);
    
    for (let i of arr) {
        let count = 0;
        for (let j of i) {
            count += j;
        }
        if(isPrime(count)) answer++;
    }
    
    return answer;
}
