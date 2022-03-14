function solution(people, limit) {
    let answer = 0;
    let len = people.length;
    let index = 1;
        
    people.sort((x, y) => (y - x));
    
    for (let i = 0; i < len; i++) {
        if (i === len - index) {
            answer++;
            break;
        } else if (i > len - index) break;
        
        if (people[i] + people[len - index] <= limit) {
            index++;
            answer++;
        } else answer++;
    }
    
    return answer;
}

/* another solution */
function solution(people, limit) {
    let answer = 0;
    let left = 0;
    let right = people.length - 1;

    people.sort((x, y) => y - x);

    while (left <= right) {
        if (people[left++] + people[right] <= limit) right--;
        answer++;
    }
    return answer;
}
