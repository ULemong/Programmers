## [주식가격](https://programmers.co.kr/learn/courses/30/lessons/42584?language=python3)

```javascript
function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    let afterPrices = prices.slice(1);
    let price = prices.shift();
    // 이렇게 작성하면 prices 원본 배열이 변경되므로 prices.length 값이 변한다.
    
    // let afterPrices = prices.slice(i + 1);
    // let price = prices[i];
    let count = 0;

    while (true) {
      if (price <= afterPrices[0]) {
        count++;
        afterPrices.shift();
      } else {
        count++;
        answer.push(count);
        break;
      }

      if (!afterPrices.length) {
        answer.push(count);
        break;
      }
    }
  }

  answer.push(0);
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([4, 5, 3, 2, 4])); // [2, 1, 1, 1, 0]
```
