function solution(nums) {
    let n = nums.length / 2;
    let m = new Set(nums).size;
    
    return n > m ? m : n;
}

/* another solution */
function solution(nums) {
    let n = nums.length / 2;
    let arr = [...new Set(nums)].length;
    
    return n > arr ? arr : n;
}
