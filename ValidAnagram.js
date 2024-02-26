

var isAnagram = function (s, t) {

    var IsFound = false;
    let tArray = t.split('');
    if (s.length != t.length) {
        return false;
    }
    // for (let i = 0; i < s.length; i++) {
    //     IsFound = false;
    //     for (let j = 0; j < tArray.length; j++) {
    //         if (s[i] ==  tArray[j]) {
    //             tArray[j] = '-';
    //             IsFound = true; 
    //             console.log(tArray[j])
    //             break;
    //         }
    //     }
    //     if (!IsFound) {
    //         return false;
    //     }
    // }
    let obj = {}
    let obj1 = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (obj1[t[i]] === undefined) {
            obj1[t[i]] = 1;
        } else {
            obj1[t[i]] += 1;
        }
    }
    for (let k = 0; k < s.length; k++) {
        if (obj[s[k]] != obj1[s[k]]) {
            return false;
        }
    }

    console.log(obj1)
    console.log(obj1[s[0]])

    return true;
};

s = "anagram", t = "nagaram"




console.log(isAnagram(s, t));
