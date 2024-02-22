
var firstUniqChar = function (s) {

    var index = 0;
    var letterCount = 0;
    var IsSecondfind = false;
    for (let i = 0; i < s.length; i++) {
        index = i;
        IsSecondfind = false;
        for (let j = 0; j < s.length; j++) {
            if (s[i] == s[j] && i != j) {
                IsSecondfind = true;
                break;
            }
        }
        if (!IsSecondfind) {
            break;
        }
        letterCount++
    } 
   
    if(letterCount == s.length){
        return -1
    }
    return index;
};


s = "aabb"

console.log(firstUniqChar(s))