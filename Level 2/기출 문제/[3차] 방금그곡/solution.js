function replace(str) {
    return str.replace(/A#/g, 'a')
              .replace(/C#/g, 'c')
              .replace(/D#/g, 'd')
              .replace(/F#/g, 'f')
              .replace(/G#/g, 'g');
    // return str.replace(/[A-Z]#/g, a => a[0].toLowerCase());  
}

function solution(m, musicinfos) {
    let info = [];
    let playTime = [];
    
    for (let i of musicinfos) {
        info.push(i.split(','));
    }
    
    for (let i of info) {
        let startHour = parseInt(i[0].slice(0, 3)); // i[0].split(':')[0]
        let startMinute = parseInt(i[0].slice(3)); // i[0].split(':')[1]
        let endHour = parseInt(i[1].slice(0, 3));
        let endMinute = parseInt(i[1].slice(3));
        
        let hour = endHour - startHour;
        let minute = endMinute - startMinute;
        if (minute < 0) {
            minute += 60;
            hour--;
        }
        
        /* Date 객체사용 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)*/
        // let time = (new Date(`1970-01-01 ${i[1]}:00`) - new Date(`1970-01-01 ${i[0]}:00`)) / 60000;
        
        let time = (hour * 60) + minute;   
        let song = replace(i[3]);
        let melody = replace(m);
        let len = song.length;  
        let str;
        
        if (time > len) {
            let quotient = parseInt(time / len); // 몫
            let remainder = time % len; // 나머지

            str = song.repeat(quotient) + song.slice(0, remainder);
        } 
        else if (time < len) {
            str = song.slice(0, time)
        } 
        else {
            str = song;
        }
        
        if (str.includes(melody)) playTime.push([i[2], time]); // [제목, 재생 시간]
    }
    if (!playTime.length) return "(None)";
    
    playTime.sort((a, b) => b[1] - a[1]);
    return playTime[0][0];
}
