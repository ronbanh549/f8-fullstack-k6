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
