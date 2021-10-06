function solution(a, b) {
    let answer = '';   
    let day = new Date(2016, a - 1, b).getDay(); // 1월은 0부터 시작
    
    switch (day) {
        case 0: 
            answer = "SUN";
            break;
        case 1: 
            answer = "MON";
            break;
        case 2: 
            answer = "TUE";
            break;
        case 3: 
            answer = "WED";
            break;
        case 4: 
            answer = "THU";
            break;
        case 5: 
            answer = "FRI";
            break;
        case 6: 
            answer = "SAT";
            break; 
    }
    
    return answer;
}

/* another solution_1 */
function solution(a, b) {   
    let day = new Date(2016, a - 1, b).getDay();
    let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return arr[day];
}

/* another solution_2 */
function solution(a, b) {   
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(2016, a - 1, b).getDay()];
}
