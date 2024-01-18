// add whatever parameters you deem necessary
function constructNote(note, letters) {
    const _letters = {};
    for (let letter of letters){
        _letters[letter] = _letters[letter] + 1 || 1;
    }
    for (let letter of note){
        if (!_letters[letter] || _letters[letter] < 1){
            return false;
        }
        _letters[letter]--;
    }
    return true;
}

module.exports = constructNote;
