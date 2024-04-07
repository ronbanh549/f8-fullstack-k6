// Bai 1
function sumNumbers(...numbers) {
  for (var number of numbers) {
    if (typeof number !== "number") {
      return "Lỗi: Tất cả các tham số phải là số.";
    }
  }

  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumNumbers(1, 2, 3));
console.log(sumNumbers(1, "a", 3));

// Bai 2
Number.prototype.getCurrency = function (currency) {
  return this.toLocaleString() + " " + currency;
};

var price = 12000;
console.log(price.getCurrency("đ"));

var anotherPrice = 15000.5;
console.log(anotherPrice.getCurrency("$"));

// Bài 3
Array.prototype.push2 = function (...items) {
  for (var i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  return this.length;
};
var myArray = [1, 2, 3];
myArray.push2(4, 5);
console.log(myArray);

// Bài 4
Array.prototype.filter2 = function (testFunc) {
  var filteredArray = [];
  for (var i = 0; i < this.length; i++) {
    if (testFunc(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter2(function (element) {
  return element % 2 === 0;
});
console.log(evenNumbers);
