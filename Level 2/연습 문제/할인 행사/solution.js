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

/* another solution */
function solution(want, number, discount) {
  let answer = 0;
  const info = {};
  for (let i = 0; i < number.length; i++) {
    info[`${want[i]}`] = info[`${want[i]}`] || number[i];
  }
  for (let i = 0; i <= discount.length - 10; i++) {
    let flag = true;
    for (let w of want) {
      if (
        discount.slice(i, i + 10).filter((x) => x === w).length < info[`${w}`]
      ) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
