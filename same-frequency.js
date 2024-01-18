// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if (String(num1).length !== String(num2).length){
        return false;
    }
    let count = 0;
    const obj = {};
    for (let num of String(num1)){
        obj[num] = obj[num] + 1 || 1;
    }
    for (let num of String(num2)){
        if (obj[num]){
            if (obj[num] === 0){
                return false;
            }
            else if (obj[num] === 1) {
                count++;
            }
            obj[num]--;
        }
    }
    return count === Object.keys(obj).length;
}

module.exports = sameFrequency;
