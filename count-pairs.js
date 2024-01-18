// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    const obj = {};
    let pairs = 0;
    arr.forEach(e => obj[e] = true);
    for (let num of arr){
        if (sum === 2 * num){
            continue;
        }
        if (obj[sum-num]){
            pairs++;
        }
    }
    return pairs/2;
}

module.exports = countPairs;
