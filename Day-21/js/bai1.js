var arrA = [1, 4, 3, 2, 6];
var arrB = [5, 2, 6, 7, 1];

var arrC = [];

for (var i = 0; i < arrA.length; i++) {
  for (var j = 0; j < arrB.length; j++) {
    if (arrA[i] === arrB[j]) {
      arrC[arrC.length] = arrA[i];
    }
  }
}

console.log(arrC);
