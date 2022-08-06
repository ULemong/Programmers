function solution(msg) {
  const answer = [];
  const hash = {};
  let num = 27;

  for (let i = 0; i < msg.length; i++) {
    let count = 0; // 확인할 글자 수 추가

    while (true) {
      let wc = msg.slice(i, i + 2 + count);

      // 마지막 글자까지 확인한 경우
      if (msg.length === i + 1 + count) {
        if (wc.length > 1) answer.push(hash[wc]);
        else answer.push(wc.charCodeAt() - 64);

        return answer;
      }

      if (hash[wc]) {
        // 사전에 있는 경우
        count++;
      } else {
        // 사전에 없는 경우
        let w = wc.slice(0, wc.length - 1);

        // 사전 추가
        hash[wc] = num;
        num++;

        if (w.length > 1) answer.push(hash[w]);
        else answer.push(w.charCodeAt() - 64);

        i += count;
        break;
      }
    }
  }
}
