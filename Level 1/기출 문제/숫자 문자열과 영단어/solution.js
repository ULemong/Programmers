function solution(s) {
    const NUMBER = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for(let i = 0; i < NUMBER.length; i++) {
        if (!s.includes(NUMBER[i])) continue
        
        let arr = s.split(NUMBER[i]);
        s = arr.join(i);
    }
    
    return +(s);
}
