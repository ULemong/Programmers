function solution(today, terms, privacies) {
  const answer = [];
  const [year, month, date] = today.split(".").map(Number);
  const todates = year * 12 * 28 + month * 28 + date;
  const t = {};
  
  terms.forEach((e) => {
    const [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  
  privacies.forEach((e, i) => {
    const [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    
    const dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  
  return answer;
}
