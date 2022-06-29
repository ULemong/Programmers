function solution(s) {
  const len = s.length;
  const halfLen = Math.ceil(len / 2);
  const cutLen = [];

  for (let i = 1; i <= halfLen; i++) {
    const cutStr = [];
    let count = 0;
    let duplicateCount = 0; // 연속되는 문자열의 개수

    // i개 단위로 자르기
    for (let j = 0; j < len; j += i) {
      const str = s.slice(j, j + i);
      cutStr.push(str);
    }

    for (let k = 0; k < cutStr.length; k++) {
      if (cutStr[k] !== cutStr[k + 1]) {
        if (cutStr[k] === cutStr[k - 1]) duplicateCount++;

        if (duplicateCount) count += String(duplicateCount).length; // 연속된 문자가 10개 이상이면 +2
        count += cutStr[k].length;

        duplicateCount = 0;
      } 
      else duplicateCount++;
    }
      
    cutLen.push(count);
  }

  return Math.min(...cutLen);
}
