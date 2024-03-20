/* 
    - Khởi tạo biến cho giá trị lớn nhất và nhỏ nhất. Ban đầu, bạn có thể gán chúng là phần tử đầu tiên của mảng.
    - Khởi tạo biến để lưu vị trí của giá trị lớn nhất và nhỏ nhất.
    - Sử dụng một vòng lặp để duyệt qua từng phần tử của mảng.
    - Trong mỗi lần lặp, so sánh phần tử hiện tại với giá trị lớn nhất và nhỏ nhất đã lưu.
    - Cập nhật giá trị lớn nhất và nhỏ nhất cùng vị trí của chúng nếu cần thiết.
*/

function findMinMax(arr){
    if(arr.length === 0){
        return null;
    }

var max = arr[0];
var min = arr[0];
var maxIndex = 0;
var minIndex = 0;

for (var i = 1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
        maxIndex = i;
    }
    if(arr[i]<min){
        min = arr[i];
        minIndex = i;
    }
}

return{
    max: max,
    maxIndex: maxIndex,
    min: min,
    minIndex: minIndex
};
}

var array = [10, 3, 15, 5, 7, 1, 4, 9 ,0];
var result = findMinMax(array);
console.log(result);