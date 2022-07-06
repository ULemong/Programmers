function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;

  if (!cacheSize) return cities.length * 5;

  for (let city of cities) {
    city = city.toLowerCase();

    // 1. city가 cache에 없는 경우
    if (!cache.includes(city)) {
      // 1-1) cache 공간 있는 경우
      if (cache.length < cacheSize) {
        cache.push(city);
      }
      // 1-2) cache 공간 없는 경우
      else {
        cache.shift();
        cache.push(city);
      }

      time += 5;
    }

    // 2. city가 cache에 있는 경우
    else {
      const index = cache.indexOf(city);
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    }
  }

  return time;
}

/* another solution */
function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;
  let index = 0;

  if (!cacheSize) return cities.length * 5;

  while (index < cities.length) {
    const city = cities[index++].toLowerCase();
    const searchIndex = cache.indexOf(city);

    // 1. city가 cache에 없는 경우
    if (searchIndex === -1) {
      // cache 공간 없는 경우
      if (cache.length >= cacheSize) {
        cache.shift();
      }
        
      time += 5;
    }
      
    // 2. city가 cache에 있는 경우
    else {
      cache.splice(searchIndex, 1);
      time += 1;
    }

    cache.push(city); // 모든 경우에 push 발생
  }

  return time;
}
