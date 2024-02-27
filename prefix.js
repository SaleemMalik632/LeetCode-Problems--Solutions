/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/


var longestCommonPrefix = function (strs) {

    var result = "";
    var firstelement = strs[0];
    var checkindex = 0;
    if (strs.length > 1) {
        for (let j = 1; j < strs.length; j++) {
            if (firstelement.length > strs[j]) {
                firstelement = strs[j];
            }
        }
        for (let i = 0; i < strs.length; i++) {
            if (firstelement[checkindex] != strs[i][checkindex]) {
                return result;
            }
            else {
                if (i == strs.length - 1) {
                    if (firstelement != "") {
                        result += firstelement[checkindex];
                        checkindex++;
                        i = 0;
                        if (checkindex == (firstelement.length)) {
                            return result; 
                        }
                    } else {
                        result = firstelement;
                    }
                }
            }
        }
    }
    return firstelement

    // if (strs.length === 0) {
    //     return "";
    // }
    // // Sort the array of strings
    // strs.sort(); 
    // // Compare the first and last strings
    // const first = strs[0];
    // const last = strs[strs.length - 1];
    // // Find the common prefix between the first and last strings
    // let prefix = "";
    // for (let i = 0; i < first.length; i++) {
    //     if (i < last.length && first[i] === last[i]) {
    //         prefix += first[i];
    //     } else {
    //         break;
    //     }
    // }

    // return prefix;
};



strs = ['aaa','aaaaaaaaoo','abbbbbbbbbbbbbbbbbb']

console.log(longestCommonPrefix(strs))