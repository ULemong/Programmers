function solution(a, b) {
    let sum = 0;
    
    if (a > b) [a, b] = [b, a];
    
    for (let i = a; i <= b; i++) {
            sum += i;
    }
  return sum;
}

/* another solution */
function solution(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2; // 가우스 공식
}

/* another solution */
function solution(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let sum = 0;

    if ((a + b) % 2 === 0) {
        for (let i = a; i < (a + b) / 2; i++) {
            sum += a + b;
        }
        return sum + (a + b) / 2;
    }
    else {
        for (let i = a; i < Math.ceil((a + b) / 2); i++) {
            sum += a + b;
        }
        return sum;
    }
}
