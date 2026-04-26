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


// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level Web Development" };
// const courses = [
//   [course1, "level1"],
//   [course2, "level2"],
//   ["programmingL3", "level3"],
// ];

// const map = new Map(courses);
// console.log(map);



//The Core Transformation Toolkit (map, filter, sort, slice)
//input
const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
];

//output = [{name: 'Phone'}, {name:'watch'}]

//process
//1. filter the electronics
//2. sort by rating
//3. slice first 3
//4. Map => transform shape to only name
// const electronics = rawApiData
//   .filter((item) => item.category === "Electronics")
//   .sort((a, b) => b.rating - a.rating)
//   .slice(0, 3)
//   .map((item) => ({ name: item.productName }));

// console.log(electronics);
*/

//Sorting and flattening array
// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["Banana", "apple", "Cherry", "date"];

// const sorted = fruits.sort((a, b) => a.localeCompare(b));
// console.log(sorted);
// console.log(fruits);
// const tagsFromPosts = [
//   ["javascript", "react", "css"],
//   ["node", ["express"]],
//   ["css", "html", "react"],
// ];

// const filtered = [...new Set(tagsFromPosts.flat(2))];
// console.log(filtered);

//Array cross matching and Array.from() explained

// const currentUserRoles = ["user", "editor", "admin"];
// const featureAccessRoles = ["admin", "manager"];

// const numbers = [1, 5, 3, 7, 5];
// const hasOdd = numbers.some((arr) => arr % 2 === 1);
// console.log(hasOdd);

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role),
// );
// console.log(canAccess);

// const arr = Array.from({ length: 5 }).fill(0);
// const arr = Array.from({ length: 5 }, (_, i) => i + 1);
// const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);

// const range = (start, stop, step) => {
//   return Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step,
//   );
// };
// console.log(range(0, 11, 2));
