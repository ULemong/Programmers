## [N개의 최소공배수](https://programmers.co.kr/learn/courses/30/lessons/12953)
### 문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

### 제한사항
- arr은 길이 1이상, 15이하인 배열입니다.
- arr의 원소는 100 이하인 자연수입니다.


### 입출력 예

|arr|result|
|:--|:--|
|[2,6,8,14]|168|
|[1,2,3]|6|

<br><hr>

### Solution
```javascript
/* 초반 코드 */
function solution(arr) {
    let n = 0;
    let max = Math.max(...arr);
    let lastNum = arr[arr.length - 1];
    
    while(true) {
        n++;
        let num = max * n;
        
        for (let i of arr) {
            if (num % i !== 0) break;
            
            if (i === lastNum) return num; // [2, 4, 7, 4] -> 같은 값이 2개 이상이며 lastNum과 같을 경우 바로 return
                                           // 따라서 값이 아닌 index로 접근해야 함          
        }
    }
}
```

```javascript
/* 정답 코드 */
function solution(arr) {
    let n = 0;
    let max = Math.max(...arr);
    let len = arr.length;
    
    while(true) {
        n++;
        let num = max * n;
        
        for (let i = 0; i < len; i++) {
            if (num % arr[i] !== 0) break;
            
            if (i === len - 1) return num;        
        }
    }
}
```
