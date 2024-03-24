var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var strings = [];
var numbers = [];
var booleans = [];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    var value = arr[i][j];

    if (typeof value === "string") {
      strings.push(value);
    } else if (typeof value === "number") {
      numbers.push(value);
    } else if (typeof value === "boolean") {
      booleans.push(value);
    }
  }
}

var sortedArr = [strings, numbers, booleans];
console.log(sortedArr);
