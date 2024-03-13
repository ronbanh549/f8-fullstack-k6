function fibonacci(n, a = 0, b = 1, sequence = []) {
    if (n === 0) {
        return sequence;
    }
    sequence.push(a);
    return fibonacci(n - 1, b, a + b, sequence);
}

const n = 10; // Số lượng số Fibonacci bạn muốn
const fibSequence = fibonacci(n);
console.log(fibSequence);
