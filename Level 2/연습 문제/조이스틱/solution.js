function solution(name) {
    let answer = 0; // 상하 조작
    let length = name.length;
    let move = length - 1; // 좌우 조작 (순서대로 이동하는 경우)
    let index;
    
    // "BBBBAAAAAAAD", 10
    for(let i = 0; i < length; i++) {
        let ascii = name[i].charCodeAt(0);
        if (ascii < 79) answer += ascii - 65; // A ~ N  
        else answer += 91 - ascii; // O ~ Z
        
        index = i + 1;
        
        // 연속하는 A의 개수
        while(index < length && name[index] === 'A') index++;
        
        move = Math.min(move, i * 2 + length - index); // min(순서대로 가는 경우, 순서대로 가다가 되돌아가는 경우)  
                                                       // B->B->B->B->A->A->A->A->A->A->A-> (11), (B->B->B->B B<-B<-B<-B)->D (6+1 = 7) 
        move = Math.min(move, (length - index) * 2 + i); // min(move, 뒤에부터 먼저 가는 경우)
                                                         // (7), (B->D B<-D)->B->B->B (2+3 = 5)
    }
    
    return answer + move;
}
