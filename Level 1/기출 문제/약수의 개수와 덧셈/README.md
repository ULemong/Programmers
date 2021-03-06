## [약수의 개수와 덧셈](https://programmers.co.kr/learn/courses/30/lessons/77884)
### 문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

### 입력 형식
입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
- 1 ≦ n ≦ 16
- arr1, arr2는 길이 n인 정수 배열로 주어진다.
- 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

### 제한사항
- 1 ≤ left ≤ right ≤ 1,000

### 입출력 예

|left|right|result|
|:--|:--|:--|
|13|17|43|
|24|27|52|

### 입출력 예 설명
#### 입출력 예 #1
- 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
 
|수|약수|약수의 개수|
|:--|:--|:--|
|13|1, 13|2|
|14|1, 2, 7, 14|4|
|15|1, 3, 5, 15|4|
|16|1, 2, 4, 8, 16|5|
|17|1, 17|2|

- 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.

#### 입출력 예 #2
- 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
 
|수|약수|약수의 개수|
|:--|:--|:--|
|24|1, 2, 3, 4, 6, 8, 12, 24|8|
|25|1, 5, 25|3|
|26|1, 2, 13, 26|4|
|27|1, 3, 9, 27|4|

- 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.
