function solution(survey, choices) {
    let answer = '';
    const indicators = [ ['RT'], ['CF'], ['JM'], ['AN'] ]
    const type = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] < 4) {
            type[survey[i][0]] += (4 - choices[i])
        } else if (choices[i] > 4) {
            type[survey[i][1]] += (choices[i] - 4)
        }
    }
    
    for (let i = 0; i < indicators.length; i++) {
        if (type[indicators[i][0]] > type[indicators[i][1]]) {
            answer += indicators[i][0]
        } else if (type[indicators[i][0]] < type[indicators[i][1]]) {
            answer += indicators[i][1]
        } else {
            answer += indicators[i][0]
        }
    }
    
    return answer;
}

/* another solution */
function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
