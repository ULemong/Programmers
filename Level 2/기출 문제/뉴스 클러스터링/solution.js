function solution(str1, str2) {
    const arr1 = [];
    const arr2 = [];
    
    // 영문자로 된 글자 쌍만 유효
    // 대문자와 소문자의 차이는 무시
    const regExp = /[A-Za-z]+/g;
    for (let i = 0; i < str1.length - 1; i++) {
        if (str1[i].match(regExp) && str1[i + 1].match(regExp)) 
            arr1.push(str1[i].toLowerCase() + str1[i + 1].toLowerCase());
    }
        
    for (let i = 0; i < str2.length - 1; i++) {
        if (str2[i].match(regExp) && str2[i + 1].match(regExp))
            arr2.push(str2[i].toLowerCase() + str2[i + 1].toLowerCase());
    }
    
    // A와 집합 B가 모두 공집합 -> J(A, B) = 1 (* 65536)
    if (!arr1.length && !arr2.length) return 65536;
    
    arr1.sort();
    arr2.sort();
    
    let intersectLen = 0; // 교집합
    let unionLen = 0; // 합집합
    const intersect = [...new Set(arr1.filter(it => arr2.includes(it)))];
    const union = [...new Set([...arr1, ...arr2])];
    
    union.forEach(v => {
        let arr1_Index = arr1.indexOf(v);
        let arr2_Index = arr2.indexOf(v);
        let arr1_LastIndex = arr1.lastIndexOf(v);
        let arr2_LastIndex = arr2.lastIndexOf(v);
        
        if (arr1_Index !== arr1_LastIndex || arr2_Index !== arr2_LastIndex) {
            (arr1_LastIndex - arr1_Index + 1 >= arr2_LastIndex - arr2_Index + 1) ?
                unionLen += arr1_LastIndex - arr1_Index :
                unionLen += arr2_LastIndex - arr2_Index;
        }
    });
       
    intersect.forEach(v => {
        let arr1_Index = arr1.indexOf(v);
        let arr2_Index = arr2.indexOf(v);
        let arr1_LastIndex = arr1.lastIndexOf(v);
        let arr2_LastIndex = arr2.lastIndexOf(v);
        
        if (arr1_Index !== arr1_LastIndex || arr2_Index !== arr2_LastIndex) {
            (arr1_LastIndex - arr1_Index + 1 <= arr2_LastIndex - arr2_Index + 1) ?
                intersectLen += arr1_LastIndex - arr1_Index :
                intersectLen += arr2_LastIndex - arr2_Index;
        }
    });
    
    unionLen += union.length;
    intersectLen += intersect.length; 
    
    return Math.floor(intersectLen / unionLen * 65536);
}

/* another solution */
function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
        const node = text.substr(i, 2);
        if (node.match(/[A-Za-z]{2}/)) result.push(node.toLowerCase());
    }
      
    return result;
}

function solution (str1, str2) {
    const arr1 = explode(str1);
    const arr2 = explode(str2);
    const set = new Set([...arr1, ...arr2]);

    let union = 0;
    let intersection = 0;

    set.forEach(item => {
        const has1 = arr1.filter(x => x === item).length;
        const has2 = arr2.filter(x => x === item).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    });
    
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
