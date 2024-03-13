function numberToWords(num) {
    if (num < 0 || num > 9999) {
        return "Số nằm ngoài phạm vi cho phép";
    }

    const unitWords = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const specialNumbers = {10: "mười", 11: "mười một", 12: "mười hai", 15: "mười lăm"};

    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num % 1000) / 100);
    let tens = Math.floor((num % 100) / 10);
    let units = num % 10;

    let words = [];

    if (thousands) {
        words.push(unitWords[thousands] + " ngàn");
    }
    if (hundreds) {
        words.push(unitWords[hundreds] + " trăm");
    }
    if (tens || units) {
        if (tens === 1) {
            words.push(specialNumbers[10 + units] || (unitWords[tens] + " mươi " + unitWords[units]));
        } else {
            words.push(tens ? (unitWords[tens] + " mươi") : "lẻ");
            if (units === 1 && tens > 1) {
                words.push("mốt");
            } else if (units === 5 && tens > 0) {
                words.push("lăm");
            } else if (units > 0) {
                words.push(unitWords[units]);
            }
        }
    }

    return words.join(" ").trim();
}

console.log(numberToWords(4298)); // "Bốn ngàn hai trăm chín tám"
