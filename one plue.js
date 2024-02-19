// var plusOne = function (digits) {
//     let completeNmber = 0;
//     let niceCount = 0
//     for (var i = 0; i < digits.length; i++) {
//         completeNmber = completeNmber * 10 + digits[i];
//         if (digits[i] === 9) {
//             niceCount++;
//         }
//     }
//     if (completeNmber % 10 === 9 && niceCount == digits.length) {
//         completeNmber = completeNmber + 1;
//         digits.length = digits.length + 1;
//         let i = 1;
//         while (completeNmber >= 1) {
//             digits[digits.length - i] = completeNmber % 10;
//             completeNmber = completeNmber / 10;
//             i++;
//         }
//     }
//     else {
//         console.log(completeNmber)
//         if (completeNmber % 10 === 9) {
//             completeNmber = completeNmber + 1;
//             let i = 1;
//             while (completeNmber >= 1) {
//                 digits[digits.length - i] = completeNmber % 10;
//                 completeNmber = Math.floor(completeNmber / 10); // Round down and assign
//                 i++;
//             }
//         } else {
//             completeNmber = completeNmber + 1;
//             digits[digits.length - 1] = completeNmber % 10;
//         }
//     }
//     return digits
// };






var plusOne = function (digits) {
    let carry = 1; 
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10; 
        carry = Math.floor(sum / 10); 
        console.log(carry)
        if (carry === 0) {
            return digits;
        }
    }
    return [1, ...digits];
    
};











console.log(plusOne([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // 124

9876543211

9876543210