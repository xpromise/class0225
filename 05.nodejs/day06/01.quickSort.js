Array.prototype.quickSort = function () {

  // 生成新数组
  const arr = [...this];
  // 判断数组长度，大于1才参与排序
  let length = arr.length;
  if (length < 2) return arr;
  // 找到基准值（简单取中间值）
  const pivotIndex = Math.floor(length / 2);
  // 基准值不参与排序， 所以从数组提取来
  const pivot = arr.splice(pivotIndex, 1);
  length--;

  const left = [];
  const right = [];

  for (let i = 0; i < length; i++) {
    let item = arr[i];
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return left.quickSort().concat(pivot, right.quickSort());
};

const arr = [2, 8, 4, 7, 5, 2, 3, 6, 1];

console.log(arr.quickSort());
console.log(arr);