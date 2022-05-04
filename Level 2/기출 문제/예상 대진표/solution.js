function solution(n,a,b) {
    var answer = 0;
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    
    let mid = parseInt(n / 2);
    
    while (true) {
      if (b - a === 1) return 1;
    
        if (a <= mid && b <= mid) {
            mid = parseInt(mid / 2); // 4

        }
        else if (a <= mid && b > mid)  {
            answer++
            a = Math.ceil(a / 2) // 2
            b = Math.ceil(a / 2) // 6
            mid = parseInt(mid / 2) // 2
        } 
        else if (a > mid && b > mid) { 

        }  
    }
         
    return answer;
}
