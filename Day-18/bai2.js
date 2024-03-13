function reverseNumber(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    console.log(reversed);
    return reversed;
}

reverseNumber(12345); // Kết quả sẽ được hiển thị trên console là 54321
