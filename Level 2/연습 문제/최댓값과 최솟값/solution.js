function solution(s) {
    let arr = s.split(' ');
    arr.sort((x, y) => x - y);

    return (arr[0] + ' ' + arr[arr.length - 1]);
}

/* another solution */
function solution(s) {
    const arr = s.split(' ');
    
    // string 자료형도 Math.min, Math.max 메서드 사용 가능
    return (Math.min(...arr) + ' ' + Math.max(...arr));
}
