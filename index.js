//performance api
//const startTime = performance.now();
//console time
// console.time("task");
// for (let i = 0; i <= 5000; i++) {
//   console.log(i);
// }

//const endTime = performance.now();

//console.log(`This took ${endTime - startTime} milliseconds`);

//console.timeEnd("task");

// const firstArray = [];
// const secondArray = [];

// for (let i = 0; i < 600000; i++) {
//   if (i < 300000) {
//     firstArray.push(i);
//   }
//   secondArray.push(i);
// }

// console.log(firstArray.length);
// console.log(secondArray.length);

//console.time("map1");
//const startTime = performance.now();
//const firstUserList = firstArray.map((number) => ({ userId: number }));
//const endTime = performance.now();
// console.log(`This took ${endTime - startTime} milliseconds`); //5.466899999999995
//console.timeEnd("map1");

//console.time("map2");
//const startTime = performance.now();
//const secondUserList = secondArray.map((number) => ({ userId: number }));
//const endTime = performance.now();
//console.log(`This took ${endTime - startTime} milliseconds`);//44.5439 milliseconds
//console.timeEnd("map2");
//map1: 7.705ms
//map2: 48.617ms

//console.time("find");
//find linear increases the time
// const user = secondUserList.find((user) => user.userId === 20000);//find: 0.389ms
// const user = secondUserList.find((user) => user.userId === 200000); //find: 1.926ms

//always constant time kind of look up table
//const user = secondUserList[20000]; //find: 0.014ms
//const user = secondUserList[200000]; //find: 0.018ms
//console.timeEnd("find");

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);

// console.log(set);
// console.log(set.size);

// const mezba = { userName: "mezba" };
// const ezba = { userName: "ezba" };
// const zba = { userName: "zba" };
// const set = new Set();

// set.add(mezba);
// set.add(ezba);
// set.add(zba);
// set.add(mezba);

// console.log(set);
// console.log(set.size);

const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"];
//const set = new Set(arr);
//console.log(set);
//const remDup = [...set];
//console.log(remDup);

//set iteration
// const test = set.forEach((val) => console.log(val));
// console.log(test);

//const setToArr = Array.from(set).push("n"); //6 cause push return the length of array
//setToArr.push("n"); //correct way
//console.log(setToArr);

// console.log(set.has("f"));
// console.log(set.has("a"));
// console.log(set.delete("a"));
// console.log(set);
// console.log(set.delete("a"));
// console.log(set);

//Remove duplicate brute Force
// const remDupArr = (arr) => {
//   const newArr = [];
//   arr.forEach((element) => {
//     if (!newArr.includes(element)) newArr.push(element);
//   });
//   return newArr;
// };
// console.log(remDupArr(arr));

function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];
  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }
  return generatedData;
}

const hugeDataSet = generateSimData(500000);

console.log("Data size", hugeDataSet.length);

//brute force
// const start = performance.now();
// const removeDup = (arr) => {
//   const newArr = [];
//   arr.forEach((el) => {
//     if (newArr.includes(el)) return;
//     newArr.push(el);
//   });
//   return newArr;
// };
// console.log(removeDup(hugeDataSet));
// const end = performance.now();
// console.log(`Array implementation took ${end - start} milliseconds`); //13.708699999999993 milliseconds

//with set
// const start = performance.now();
// const remDup = [...new Set(hugeDataSet)];
// console.log(remDup);
// const end = performance.now();
// console.log(`Array implementation took ${end - start} milliseconds`); //6.980399999999996
