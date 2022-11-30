function solution(want, number, discount) {
  let answer = 0;
  const sum = number.reduce((acc, cur) => acc + cur, 0);
  const range = discount.length - sum;
  const list = [];

  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      list.push(want[i]);
    }
  }
  list.sort();

  for (let i = 0; i <= range; i++) {
    let count = 0;
    const temp = discount.slice(i, sum + i);
    temp.sort();

    for (let j = 0; j < sum; j++) {
      if (list[j] !== temp[j]) break;
      else count++;
    }

    if (count === sum) answer++;
  }

  return answer;
}
