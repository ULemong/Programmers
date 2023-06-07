function solution(begin, target, words) {
  const visited = { [begin] : 0 };
  const queue = [begin];

  while(queue.length) {
    const cur = queue.shift();
    
    if(cur === target) break;
    
    for(const word of words) {
      if(isConnected(word, cur) && !visited[word]) {
        visited[word] = visited[cur] + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;
  
  for(let i = 0; i < len; i++) {
    if(str1[i] !== str2[i]) count++;
  }
  
  return count === 1 ? true : false;
}

/* another solution */
const diffOne = function(wordFirst, wordSecond) {
    let count = 0
    for (let i = 0; i < wordFirst.length; i++) {
        if (wordFirst[i] !== wordSecond[i]) {
            count += 1
            if (count >= 2) return false
        }

    }
    return true
}

const solution = function(begin, target, words) {
    if (!words.includes(target)) return 0
    let arr = [[begin, 0]]
    while (arr) {
        let [a, c] = arr.shift()
        for (const word of words) {
            if (diffOne(a, word)) {
                if (a === target) return c
                else arr.push([word, c + 1])
            }
        }
    }
}
