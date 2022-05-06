function solution(s) {
    let hash = {};  
    let arr = s.slice(2, s.length - 2)
               .split('},{');
    
    for (let i of arr) {
        i = i.split(',');
        for (let num of i) {
            hash[num] ? hash[num]++ : hash[num] = 1;
        }
    }
    
    let hashToArr = [];
    for (let key in hash) {
        hashToArr.push([key, hash[key]]);
    }

    return hashToArr.sort((a, b) => b[1] - a[1])
                    .map(num => +num[0]);
}

/* another solution */
function solution(s) {
    let hash = {};  
    let arr = s.slice(2, s.length - 2)
               .split('},{');
    
    let temp = [];
    for (let i of arr) {
        temp.push(i.split(',').map(num => +num));
    }
    
    temp.sort((a, b) => a.length - b.length)
    return [...new Set(temp.flat())]
}
