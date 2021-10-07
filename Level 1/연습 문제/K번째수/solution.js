function solution(array, commands) {
    let answer = [];

    for (let i of commands) {
        let arr = [];

        arr = array.slice(i[0] - 1, i[1])
        arr.sort((x, y) => x - y);

        answer.push(arr[i[2] - 1]);
    }

    return answer;
}

/* another solution */
function solution(array, commands) {
    return commands.map((command) => {
        const [s, e, p] = command;
        return array.slice(s - 1, e).sort((x, y) => x - y)[p - 1];
    });
}
