function solution(s) {
    return s.substr(Math.round(s.length / 2) - 1, (s.length % 2) ? 1 : 2);
}

/* another solution */
function solution(s) {
    return s.slice(parseInt((s.length - 1) / 2), Math.round((s.length + 1) / 2));
}
