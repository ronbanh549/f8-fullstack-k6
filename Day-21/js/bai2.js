function flattenArray(arr) {
  var result = [];

  // Hàm đệ quy để xử lý mỗi phần tử của mảng
  function flatten(subarray) {
    for (var i = 0; i < subarray.length; i++) {
      if (Array.isArray(subarray[i])) {
        flatten(subarray[i]);
      } else {
        result.push(subarray[i]);
      }
    }
  }

  flatten(arr);
  return result;
}

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

console.log(flattenArray(arr));
