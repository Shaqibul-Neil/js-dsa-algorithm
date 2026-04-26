/*
// const obj = {
//   nextLevel: { courseId: "level2" },
//   "Programming Hero": { courseId: "level1" },
// };
// obj["true"] = { courseId: "level3" };
// console.log(obj);
// console.log(obj[true]);
// console.log(obj["true"]);
// console.log(obj.true);

// Limitations of Object keys
// const course1 = { name: "Programming Hero" };

// const course2 = { name: "Next Level Web Development" };

// const obj = {};
// obj[course1] = { courseId: "level2" };
// obj[course2] = { courseId: "level1" };
// console.log(obj); //takes only one entry
// console.log(obj["[object Object]"]);

//Use Map to Overcome this
// const course1 = { name: "Programming Hero" };

// const course2 = { name: "Next Level Web Development" };

// const map = new Map();
//doesn't change boolean
//map.set(false, "Programming Hero");
// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });

//console.log(map);
// console.log(map.size);
// console.log(map.get(course1));

// map.delete(course1);
// console.log(map);

//console.log(map.has(course1));

// map.forEach((value, key) => console.log("key: ", key, "value: ", value));

// map.forEach((val, key) => (key.name = "Shohoj " + key.name));
// console.log(map);

// console.log("keys : ", [...map.keys()]); //course name peye jassi spread kore array hisebe
// console.log("values : ", map.values());
// console.log("entries : ", map.entries()); //individual array banai key value die

// for (let key of map.keys()) {
//   key.name = "Shohoj " + key.name;
//   console.log(key);
// }
// console.log(map);
*/

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };
const courses = [
  [course1, "level1"],
  [course2, "level2"],
  ["programmingL3", "level3"],
];

const map = new Map(courses);
console.log(map);
