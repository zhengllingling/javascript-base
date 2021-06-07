let arr = [];

arr = arr.concat([1], 2, [3]); // [1, 2, 3] 不改变原数组

arr.pop(); // 3, [1, 2]

arr.push(4); // [1, 2, 4]

arr.reverse(); // [4, 2, 1]

arr.shift(); // 4, [2, 1] 不改变原数组

arr.slice(0, 1); // [2], [2, 1] 不改变原数组

arr.splice(0, 1, 2, 3, 4); // 2 [2, 3, 4, 1]

arr.unshift(0, 1); // [0, 1, 2, 3, 4, 1];

// ES5
Array.isArray(arr);


// ES6新增

let arr1 = [];

let arrObj = {
    '0': 0,
    '1': 1,
    '2': 2,
    length: 3
}
// 类数组转数组
arr1 = Array.from(arrObj); // [0, 1, 2];

function toArray(arr) {
    return [].slice.call(arr);
}

// 将一组数值转化为数组
const arr2 = Array.of(1, 3, 5); // [1, 3, 5]
function toArray() {
    return [].slice.call(arguments);
}

// 复制替换
arr2.copyWithin(0, 1); // [3, 5, 5]

// find findIndex

let arr3 = [1, 2, 3];

arr3.fill(1, 1); // [1, 1, 1]

// entries keys values 会返回一个遍历器 用于遍历

// includes

// flat flatMap

// 数组的循环遍历方式

// forEach every some filter map reduce reduceRight

let arr = [1, 2, 3, 4, 5, 6, 7];
const count = arr.reduce((prev, cur, index, arr) => {
    return prev + cur;
}, 0)