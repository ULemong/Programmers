function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;
  cities = cities.map(v => v.toUpperCase())
  let queue = [];
  let answer = 0;
  let i = 0;
  while (i < cities.length) {
      const newData = cities[i++]
      let searchIndex = queue.indexOf(newData);

      if (searchIndex === -1) {
        if(cacheSize === queue.length) queue.shift();

        answer += 5;
      } else {
        queue.splice(searchIndex, 1);
        answer += 1;
      }
      queue.push(newData);
    }

  return answer;
}
