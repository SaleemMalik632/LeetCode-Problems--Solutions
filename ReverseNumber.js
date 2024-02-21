var reverse = function (x) {
    var Result = 0;
    let IsNagtive = false;
    let numStr = x.toString();
    if (numStr.length == 1) {
        return x;
    }
    if (x < 0) {
        IsNagtive = true;
        x = x * (-1);
    }
    while (x >= 1) {
        var Temp = x % 10;
        console.log(Temp)
        x = Math.floor(x / 10);
        Result += Temp.toString();
    }
    Result = Result.substring(1);
    if (Result > Math.pow(2, 31) - 1) {
        return 0;
    }
    console.log(Result)
    if (IsNagtive) {
        return Result * (-1)
    }
    return Result;



}



let x = -2147483648;
console.log(reverse(x));


