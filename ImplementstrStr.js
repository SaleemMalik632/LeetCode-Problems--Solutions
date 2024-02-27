/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/




var strStr = function (haystack, needle) {

    let index = -1;
    let accrancecount= true;
    if (haystack.length < needle.length) {
        return -1;
    }
    for (let i = 0; i < haystack.length; i++) {
        accrancecount= true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i+j] != needle[j]) {
                accrancecount = false;
                break;
            } 
        }
        if (accrancecount) {
            return i;
        }
    }
    return index;
};


haystack = "sadbutsad", needle = "sad"


console.log(strStr(haystack, needle))