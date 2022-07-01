function solution(s) {
  const len = s.length;
  const halfLen = Math.ceil(len / 2);
  const cutLen = [];

  for (let n = 1; n <= halfLen; n++) {
    const cutStr = [];
    let count = 0;
    let duplicateCount = 0; // 연속되는 문자열의 개수

    // n개 단위로 자르기
    for (let i = 0; i < len; i += n) {
      const str = s.slice(i, i + n);
      cutStr.push(str);
    }

    for (let j = 0; j < cutStr.length; j++) {
      if (cutStr[j] !== cutStr[j + 1]) {
        if (cutStr[j] === cutStr[j - 1]) duplicateCount++;

        if (duplicateCount) count += String(duplicateCount).length; // 연속된 문자가 10개 이상이면 +2
        count += cutStr[j].length;

        duplicateCount = 0;
      } 
      else duplicateCount++;
    }
      
    cutLen.push(count);
  }

  return Math.min(...cutLen);
}

/* another solution. 레이블 문 사용 */
function solution(s) {
  let minLen = s.length;

  top: for (let n = 1; n <= s.length / 2; n++) {
    let curLen = 0;

    for (let i = 0; i < s.length; i += n) {
      let counter = 1;
      const str = s.slice(i, i + n);

      while (str === s.slice(i + n, i + 2 * n)) {
        counter++;
        i += n;
      }

      if (counter !== 1) {
        curLen += n + String(counter).length;
      } else {
        // n개 단위로 잘랐을 때, 나머지 문자열이 있는 경우
        // curLen += s.length < i + n ? str.length : n;
        curLen += str.length < n ? str.length : n;
      }

      if (minLen <= curLen) continue top;
    }

    minLen = curLen; // 레이블 문 실행되지 않았다면, 최소값 보장
  }
  return minLen;
}
