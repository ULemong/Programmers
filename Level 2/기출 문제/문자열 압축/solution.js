function solution(s) {
    var answer = 0;
    
    const arr = [];
    

    const len = Math.ceil(s.length / 2)

    for (let i = 1; i <= len; i++) {
        let temp = []

        for (let j = 0; j < s.length; j += i) {
            let string = s.slice(j, j+i)
            temp.push(string)
        }
       
    }
        
    return answer;
}
