// add whatever parameters you deem necessary
function separatePositive(arr) {
    let place1 = 0;
    let place2 = arr.length-1;
    let temp;
    function fixPlace2(){
        while (arr[place2] < 0 && place2 >= 0){
            place2--;
        }
    }
    fixPlace2();
    while (place1 < place2){
        if (arr[place1] < 0){
            temp = arr[place2];
            arr[place2] = arr[place1];
            arr[place1] = temp;
            place2--;
            fixPlace2();
        }
        place1++;
    }
    return arr;
}

module.exports = separatePositive;