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

function solution(k, dungeons) {
    let answer = [];
    let len = dungeons.length;
    let result = getPermutation(dungeons, len, []).flat(len - 1);
        
    for (let dungeon of result) {
        let count = 0;
        let now = k;
        
        for (let i of dungeon) {
            if (now >= i[0]) {
                now -= i[1];
                count++;
            }
            else break;
        }
        answer.push(count);
    }
    
    return Math.max(...answer);
}
