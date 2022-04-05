function solution(skill, skill_trees) {
    let answer = 0;
    let arr = [];

    for (let skills of skill_trees) {
        arr = [];
        for (let alpha of skill) {
            arr.push(skills.indexOf(alpha));
        }

        if (arr.includes(-1)) {
            let noSkill = arr.splice(arr.indexOf(-1));

            let result = true;
            for (let v of noSkill) {
                if (v !== -1) {
                    result = false;
                    break;
                }
            }

            if (!result) continue;        
        }

        let now = arr[0];
        let result = true;
        for (let v of arr) {
            if (v < now) {
                result = false;
                break;
            }
            now = v;
        }

        if (result) answer++;
    }    

    return answer;
}

/* another solution_1. 정규표현식 */
function solution(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}

/* another solution_2 */
function solution(skill, skill_trees) {
    function isCorrect(n) {
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }    

    return skill_trees.filter(isCorrect).length;
}
