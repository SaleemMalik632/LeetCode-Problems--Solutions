var containsDuplicate = function (nums) {
    let obj = {
        [nums[0]]: true,
    };
    for (let i = 1; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = false;
        } 
        else {
            obj[nums[i]] = true;
        }
    }
    for (let i in obj) {
        if (obj[i]) {
            return i;
        }
    }

};




// Path: text.js
console.log(containsDuplicate([4,1,2,1,2])); // false
