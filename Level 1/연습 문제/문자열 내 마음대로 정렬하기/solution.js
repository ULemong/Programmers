function solution(strings, n) {
    return strings.sort((x, y) => {
      if (x[n] == y[n]) {
        if (x > y) return 1;
        else return -1;
    } else {
        if (x[n] > y[n]) return 1;
        else return -1;
    } 
  }); 
}

/* another solution_1 */
function solution(strings, n) {
    return strings.sort((x, y) => 
      x[n] == y[n] ? (x > y ? 1 : -1) : x[n] > y[n] ? 1 : -1
    );
}

/* another solution_2 */
function solution(strings, n) {
    return strings.sort((x, y) => 
      x[n] == y[n] ? x.localeCompare(y) : x[n].localeCompare(y[n])
    );
}
