/*
 * 数组扁平化，最优方式为第二种flat
 *
 */
const array = [1, [2, [3], 4], 5];

// 1.通过join和split
function ArrayFlatByJoin(array) {
  return array.join(",").split(",");
}

// 2.通过es6的方法flat(), 最优解法
function ArrayFlatByES6Flat(array) {
  return array.flat(Infinity);
}

// 3.通过判断数组每项类型是否为数组，来迭代concat合并
function ArrayFlatByConcat(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      newArray = newArray.concat(ArrayFlatByConcat(element));
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(ArrayFlatByES6Flat(array));
