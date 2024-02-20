
var targetsum = function (nums, target) {

    var Result = [];
    var obj = {}
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] +nums[j]) === target) {
                
                Result.push(i);
                Result.push(j);
                console.log('doinggg')
                break;
            } 

        }
    }
    return Result;
};


let v = 0;
v +=1
console.log(v)


console.log(targetsum([3, 2, 4], 6)) 