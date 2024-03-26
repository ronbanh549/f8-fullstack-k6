function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

function nextPrimePalindrome(n) {
  while (true) {
    if (isPrime(n) && isPalindrome(n)) {
      return n;
    }
    n++;
  }
}

console.log(nextPrimePalindrome(302));
