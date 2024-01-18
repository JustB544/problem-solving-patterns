// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    if (Math.round(avg * 2) !== avg * 2 || arr.length < 2){
        return false;
    }
    let num1 = 0;
    let num2 = arr.length-1;
    let sum;
    while (num1 !== num2){
        sum = arr[num1] + arr[num2];
        if (sum === avg * 2){
            return true;
        }
        else if (sum < avg * 2){
            num1++;
        }
        else if (sum > avg * 2){
            num2--;
        }
    }
    return false;
}

module.exports = averagePair;