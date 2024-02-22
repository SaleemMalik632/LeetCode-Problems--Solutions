
var isPalindrome = function (s) {

    let OtherString = '';
    for (let i = s.length - 1; i >= 0; i--) {
        let code = s.charCodeAt(i);
        if ((code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123)) {
            OtherString += s[i];
        }
    }
    let SpaceCount = 0;
    for (let j = 0; j < s.length; j++) {
        code = s.charCodeAt(j);
        if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            SpaceCount++
            continue;
        }
        else if (s[j].toLowerCase() != OtherString[j - SpaceCount].toLowerCase()) {
            console.log(s[j])
            console.log(OtherString[j])
            return false
        }
    }
    return true;
};

s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))