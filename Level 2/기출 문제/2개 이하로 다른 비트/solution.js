function solution(numbers) {
    let answer = [];
    
    for (let num of numbers) {
        if (num % 2 === 0) answer.push(num + 1);
        else {
            let x_bit = '0' + num.toString(2);
            let index = x_bit.lastIndexOf('01');
                
            let y_bit = x_bit.slice(0, index) + '10' + x_bit.slice(index + 2);
            answer.push(parseInt(y_bit, 2));
        }
    }
    
    return answer;
}
