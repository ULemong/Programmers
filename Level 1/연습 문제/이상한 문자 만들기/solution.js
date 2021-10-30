function solution(s) {
    let arr = s.split(' ');
    let result = '';
    
    for (let i of arr) { 
        result += ' ';
        for (let j = 0; j < i.length; j++) {
            result += (j % 2 === 0) ? i[j].toUpperCase() : i[j].toLowerCase();
        }
    }
    
    return result.slice(1);
}
