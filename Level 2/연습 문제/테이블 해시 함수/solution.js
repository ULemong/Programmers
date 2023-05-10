/* another solution */
function sort(a, b, col) {
    return a[col - 1] - b[col - 1] || b[0] - a[0];
}

function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => sort(a, b, col));
    return data
        .map((row, i) => row.reduce((acc, col) => acc + (col % (i + 1)), 0))
        .slice(row_begin - 1, row_end)
        .reduce((acc, val) => acc ^ val, 0);
}
