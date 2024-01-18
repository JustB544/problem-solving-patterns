// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let place1 = 0;
    let place2 = 0;
    while (place1 < str1.length && place2 < str2.length){
        if (str1[place1] === str2[place2]){
            place1++;
        }
        place2++;
    }
    return place1 === str1.length;
}

module.exports = isSubsequence;
