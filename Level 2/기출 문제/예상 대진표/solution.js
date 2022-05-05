function solution(n, a, b) { 
    let answer = 0;
    let mid = parseInt(n / 2);
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    if (Math.ceil(a / 2) === Math.ceil(b / 2)) return 1;

    while (true) {
        if (b - a === 1) {
            if (a % 2 !== 0) return answer + 1;
            else if (mid === 1) return answer;
        }

        if (a <= mid && b <= mid) {
            mid = parseInt(mid / 2);
        }
        else if (a <= mid && b > mid)  {
            answer++;
            a = Math.ceil(a / 2);
            b = Math.ceil(b / 2);
            mid = parseInt(mid / 2);

        } 
        else if (a > mid && b > mid) { 
            a -= mid; 
            b -= mid; 
            mid = parseInt(mid / 2);
        }

    }   
}
