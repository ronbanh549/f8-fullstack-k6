function isPrime(num){
    if (num <= 1) return false;
    for(var i = 2; i*i<=num;i++){
        if(num %i===0) return false
    }
    return true;
}

function averagePrimes(arr){
    var sum = 0;
    var count = 0;

    for(var num of arr){
        if(isPrime(num)){
            sum += num;
            count++;
        }
    }

    if(count === 0){
        return "Khong co so nguyen to"
    }

    return sum / count;
}


var array = [3, 4, 5, 6, 7, 8];
var result = averagePrimes(array);
console.log(result);