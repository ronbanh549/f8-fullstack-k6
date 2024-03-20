/*
-Tạo mảng lưu trữ các ptu không trùng lặp.
-Duyệt mảng ban đầu kiểm tra từng phần tử trong mảng ban đầu.
-Dùng một vòng lặp khác để kiểm tra xem phần tử hiện tại đã có trong mảng mới ko.
-Nếu phần tử không trùng lặp,thêm vào mảng mới. 
*/

function removeDuplicates(arr) {
    var uniqueArray = [];
    var isDuplicate;

    for (var i = 0; i < arr.length; i++) {
        isDuplicate = false;
        for (var j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray[uniqueArray.length] = arr[i];
        }
    }
    return uniqueArray;
}


const array = [1, 2, 2, 3, 4, 4, 5];
const noDuplicates = removeDuplicates(array);
console.log(noDuplicates); 