
var reverce = function (s) {

    var Right = s.length-1;
    var Left = 0;
    while (Right > Left) {
        var Temp = s[Right];
        s[Right] = s[Left];
        s[Left] = Temp;
        Right--
        Left++
    }
    return s;
}


Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


console.log(reverce(s));