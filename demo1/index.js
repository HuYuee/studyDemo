const array = [1, 1, 2, 3, 4, 4, 5, 3, 9, 3, {}, {}];

// 1.一次循环，再通过indexOf找出新数组中不存在的就插入新数组
function getUniqueArray(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (newArray.indexOf(element) == -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

// 2.两层循环，再通过splice删除相同元素
function getUniqueArray1(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let flag = index + 1; flag < array.length; flag++) {
      const nextElement = array[flag];
      if (nextElement == element) {
        array.splice(flag, 1);
        flag--;
      }
      console.log(array);
    }
  }
  return array;
}

// 3.通过es6的set,这种方法还无法去掉“{}”空对象
function getUniqueArray2(array) {
  //   return Array.from(new Set(array));
  return [...new Set(array)];
}

console.log(getUniqueArray2(array));
