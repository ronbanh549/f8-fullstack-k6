function firstMissingPositive(nums) {
  nums.sort((a, b) => a - b);

  let minPositive = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > minPositive) break;
    if (nums[i] === minPositive) minPositive++;
  }

  return minPositive;
}

console.log(firstMissingPositive([3, 4, -1, 1])); // Kết quả là 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Kết quả là 1
