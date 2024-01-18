// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const obj = {};
    let count = 0;
    for (let key of arr1){
        if (count >= arr2.length){
            obj[key] = null;
        }
        else {
            obj[key] = arr2[count];
        }
        count++;
    }
    return obj;
}

module.exports = twoArrayObject;