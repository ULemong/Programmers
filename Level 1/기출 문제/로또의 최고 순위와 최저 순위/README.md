## [로또의 최고 순위와 최저 순위](https://programmers.co.kr/learn/courses/30/lessons/77484#)

### solution
```javascript
function solution(lottos, win_nums) {
  let answer = [];
  let zero = 0;
  
  answer = lottos.filter(x => {
      if (win_nums.includes(x)) return x;
      if (!x) zero++;
  });
  
  let high = 7 - (answer.length + zero);
  let low = 7 - answer.length;
  if (high > 6) high = 6;
  if (low > 6) low = 6;

  return [high, low];
}
```
