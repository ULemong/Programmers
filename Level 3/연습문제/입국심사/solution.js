function solution(n, times) {
    times.sort((a,b) => a-b);
    let left = 0;
    let right = n * times[times.length -1];
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let count = times.reduce((result, cur) => result + Math.floor(mid / cur), 0);
        
        if (count >= n) right = mid - 1;
        else left = mid + 1;
    }
    
    return left;
}
