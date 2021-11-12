function solution(n, arr1, arr2) {
  let answer = [];

  
  for (let i = 0; i < n; i++) {
      let result = '';
      
      let arr1_binary = arr1[i].toString(2);
      let arr2_binary = arr2[i].toString(2);
      
      arr1_binary = '0'.repeat(n - arr1_binary.length) + arr1_binary;
      arr2_binary = '0'.repeat(n - arr2_binary.length) + arr2_binary;

      for (let j = 0; j < n; j++) 
          result += (+(arr1_binary[j]) || +(arr2_binary[j])) ? '#' : ' ';
      
      answer.push(result);
  }
  return answer;
}
