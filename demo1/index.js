/*
 * 数组去重，建议使用hasOwnProperty来判断,第五种方法
 *
 */
const array = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];

// 1.一次循环，再通过indexOf找出新数组中不存在的就插入新数组 (这种方法还无法去掉“{}”空对象)
function getUniqueArrayByIndexOf(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

// 2.两层循环，再通过splice删除相同元素 (这种方法还无法去掉“{}”空对象)
function getUniqueArrayBySplice(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let flag = index + 1; flag < array.length; flag++) {
      const nextElement = array[flag];
      if (nextElement == element) {
        array.splice(flag, 1);
        flag--;
      }
      //   console.log(array);
    }
  }
  return array;
}

// 3.通过es6的set (这种方法还无法去掉“{}”空对象)
function getUniqueArrayBySet(array) {
  //   return Array.from(new Set(array));
  return [...new Set(array)];
}

// 4.通过hasOwnProperty来判断属性 (可以去掉)
function getUniqueArrayByHasOwnProperty(array) {
  let obj = {},
    newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!obj.hasOwnProperty(typeof element + element)) {
      //这里这个element+element很关键
      obj[typeof element + element] = null;
      newArray.push(element);
    }
  }
  return newArray;
}

// 5.通过filter+hasOwnProperty
function getUniqueArrayByFilterAndHasOwnProperty(array) {
  let obj = {};
  return array.filter((element, index, array) => {
    return obj.hasOwnProperty(typeof element + element)
      ? false
      : (obj[typeof element + element] = true);
  });
}
console.log(getUniqueArrayByFilterAndHasOwnProperty(array));
