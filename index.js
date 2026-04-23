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
