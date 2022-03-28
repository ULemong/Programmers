function solution(genres, plays) {
    let answer = [];
    let dic = {};
    let songs = [];
    let sortArr = [];
    
    for (let i = 0; i < genres.length; i++) {
        songs.push({'genre': genres[i], 'number': i, 'play': plays[i]});       
        dic[genres[i]] ? dic[genres[i]] + plays[i] : dic[genres[i]] = plays[i];
    }
 
    for (let genre in dic) sortArr.push([genre, dic[genre]]);

    sortArr.sort((x, y) => y[1] - x[1])
    
    for (genre of sortArr) {
        let count = [];
        
        for (song of songs) {
            if (song['genre'] === genre[0]) {
                count.push([song['number'], song['play']]);
            }
        }
        
        count.sort((x, y) => y[1] - x[1]);
        count.length > 1 ? answer.push(count[0][0], count[1][0]) : answer.push(count[0][0]);
    }
    
    return answer;
}

/* another solutoin_1 */
function solution(genres, plays) {
    let dic = {};
    let count = {};
    
    // 장르 별 총 재생 횟수
    genres.forEach((genre, index) => {
        dic[genre] = dic[genre] ? dic[genre] + plays[index] : plays[index];        
    });
        
    return genres          
          .map((genre, index) => ({'genre': genre, 'play': plays[index] , 'num': index}))
          .sort((x, y)=> {
               // 다른 장르
               // 1. 장르 별 재생 횟수로 정렬
               if (x.genre !== y.genre) return dic[y.genre] - dic[x.genre];
               
               // 같은 장르
               // 2. 재생 횟수 다를 경우 -> 노래 별 재생 횟수로 정렬
               if (x.play !== y.play) return y.play - x.play;
        
               // 3. 재생 횟수 같을 경우 -> 고유 번호 낮은 순서로 정렬
               return x.num - y.num;
           })
           .filter(song =>  {
               if(count[song.genre] >= 2) return false; // 배열에 song 추가 X
               count[song.genre] ? count[song.genre]++ : count[song.genre] = 1;
               return true; // 배열에 song 추가
            })
           .map(song => song.num);    
}

/* another solutoin_2 */
function solution(genres, plays) {
    const answer = [];
    const songs = [];
    const genreSumHash = {};
    const genreSumArr = [];

    // 고유번호, 장르, 플레이수를 담은 songs
    genres.forEach((genre, id) => {
        songs.push({id: id, genre: genre, play: plays[id]});
        genreSumHash[genre] = genreSumHash[genre] === undefined ? plays[id] : genreSumHash[genre] + plays[id];
    })

    // 장르별 플레이수 합으로 정렬하기 위해 생성한 배열 genreSumArr
    for (const genre in genreSumHash) genreSumArr.push([genre, genreSumHash[genre]]);
    genreSumArr.sort((a, b) => b[1] - a[1]);

    // 각 장르안에서 각 노래의 play수가 높은 순으로 정렬하고 앞에서부터 2개까지 정답에 고유번호를 push
    for (const genre of genreSumArr) {
        const sorted = songs.filter(song => song.genre === genre[0])
                            .sort((a, b) => b.play - a.play);
        for (let i = 0; i < 2 && i < sorted.length; i++) answer.push(sorted[i].id);
    }
    
    return answer;
}
