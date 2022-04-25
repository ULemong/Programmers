function solution(files) {
    var answer = [];
    let num = /\d/g;
    let str = /\D/gi;
    let arr = [];
    
    
    for (let i of files) {
        let file = [];
        for (let j = 0; j < i.length; j++) {            
            if (i[j].match(num)) {
                file.push(i.slice(0, j));
                let index = j;

                while (true) {
                    j++;
                    if (i[j].match(str)) {
                        file.push(i.slice(index, j));
                        index = j;
                        break;
                    }
                }
                file.push(i.slice(j))
            }
        }
        
        arr.push(file)
    }
    // console.log(arr)
    
    // arr.sort((a, b) => a[0].toLowerCase() - b[0].toLowerCase())
    arr.sort((a, b) => {
        const upperCaseA = a[1].toUpperCase();
        const upperCaseB = b[1].toUpperCase();
  
        if(upperCaseA < upperCaseB) return 1;
        if(upperCaseA > upperCaseB) return -1;
        if(upperCaseA === upperCaseB) return 0; 
    });
    
    // console.log(arr)
    // arr.sort((a, b) => parseInt(a[1]) - parseInt(b[1]))
    
    
    return answer;
}
