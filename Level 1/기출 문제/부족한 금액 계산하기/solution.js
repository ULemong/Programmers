function solution(price, money, count) {
    let sum = 0;
    
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    
    return (sum > money) ? sum - money : 0;
}

/* another solution */
function solution(price, money, count) {
    let sum = 0;
    
    sum = price * (((1 + count) * count) / 2); // 가우스 공식
    
    return (sum > money) ? sum - money : 0;
}
