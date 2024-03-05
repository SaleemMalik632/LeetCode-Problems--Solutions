function countSetBits(num) {
    let count = 0;
    while (num > 0) {
        // Use bitwise AND with 1 to check if the least significant bit is set
        count += num & 1;
        // Right shift the number by 1 bit to check the next bit
        num >>= 1;
    }
    return count;
}
function isEvenOdd(num) {
    if (num & 1) {
        return 'odd';
    } else {
        return 'even';
    }
} 

function swapBits(num) { 
    // Get all even bits of num
    let evenBits = num & 0xAAAAAAAA;
    // Get all odd bits of num
    let oddBits = num & 0x55555555;
    // Right shift even bits
    evenBits >>= 1;
    // Left shift odd bits
    oddBits <<= 1;
    // Combine even and odd bits
    return evenBits | oddBits;
} 


// function isPowerOfTwo(num) {
//     return (num & (num - 1)) === 0;
// }






// Example usage:
const number = 7; // Binary representation: 11001
console.log("Number of set bits:", countSetBits(number)); // Output: 3
console.log("Number is:", isEvenOdd(number)); // Output: odd
console.log("Number is:", isEvenOdd(10)); // Output: even


