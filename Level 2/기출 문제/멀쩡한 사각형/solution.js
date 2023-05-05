function solution(w, h) {
    const answer = w * h;
    const cut = w + h - gcd(w, h);

    return answer - cut;
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
