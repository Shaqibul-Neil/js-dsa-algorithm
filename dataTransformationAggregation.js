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

//From Simple Totals to Powerful Aggregation (reduce)
// const cartItems = [
//   { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
//   { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
//   { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
// ];
// const total = cartItems.reduce(
//   (accu, curr) => accu + curr.price * curr.quantity,
//   0,
// );

// console.log(total);

// Find best scorer
// const players = [
//   { name: "Jamal Bhuyan", score: 88 },
//   { name: "Shekh Morsalin", score: 81 },
//   { name: "Rakib Hossain", score: 95 },
//   { name: "Topu Barman", score: 91 },
//   { name: "Sohel Rana", score: 72 },
// ];

// const bestScorer = players.reduce((bestPlayer, player) => {
//   if (bestPlayer.score > player.score) return bestPlayer;
//   return player;
// }, players[0]);

// console.log(bestScorer);

//* Generate a lookup table

//? Input
// const postsArray = [
//   { id: "p-101", title: "Intro to SQL", author: "Alex" },
//   { id: "p-102", title: "Data Structures in JS", author: "Beth" },
//   { id: "p-103", title: "Understanding Reduce", author: "Chris" },
//   { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
// ];

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }

// const postTable = postsArray.reduce((table, current) => {
//   table[current.id] = current;
//   return table;
// }, {});
//console.log(postTable);
// const start = performance.now();
// const post = postsArray.find((p) => p.id === "p-103");
// console.log(post);
// const end = performance.now();
// console.log(`Array implementation took ${end - start} milliseconds`); //5.4ms

// const start = performance.now();
// const post = postTable["p-103"];
// const end = performance.now();
// console.log(`Lookup implementation took ${end - start} milliseconds`); //0.003ms

// const start = performance.now();
// const postMap = new Map();
// postsArray.forEach((post) => postMap.set(post.id, post));
// const post = postMap.get("p-103");
// console.log(post);
// const end = performance.now();
// console.log(`Lookup implementation took ${end - start} milliseconds`); //5.3ms
//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
// const surveyResponses = [
//   "A",
//   "C",
//   "B",
//   "A",
//   "B",
//   "B",
//   "C",
//   "A",
//   "B",
//   "D",
//   "A",
//   "C",
//   "B",
//   "A",
// ];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

// const output = surveyResponses.reduce((table, current) => {
//   console.log("before", table[current]);
//   table[current] = (table[current] || 0) + 1; //undefined || 0 --> takes 0
//   console.log("after", table[current]);
//   return table;
// }, {});
// console.log(output);

// const count = surveyResponses.reduce((table, res) => {
//   if (table[res]) {
//     table[res] = table[res] + 1;
//   } else {
//     table[res] = 1;
//   }
//   return table;
// }, {});

// console.log(count);

//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.
/*
const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

// const output = sales.reduce((table, sale) => {
//   const category = sale.category;
//   if (!table[sale.category]) {
//     table[category] = {
//       totalRevenue: sale.price * sale.quantity,
//       itemCount: sale.quantity,
//     };
//   } else {
//     table[category].totalRevenue += sale.price * sale.quantity;
//     table[category].itemCount += sale.quantity;
//   }
//   return table;
// }, {});
// console.log(output);

const output = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  // table[category] = {
  //   totalRevenue: 0,
  //   itemCount: 0,
  // };
  if (!table[category]) {
    table[category] = {
      totalRevenue: price * quantity,
      itemCount: quantity,
    };
  } else {
    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity;
  }
  return table;
}, {});
console.log(output);
*/

//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.
/*
//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]

//Create LookupTable of posts
//

const postTable = posts.reduce((table, post) => {
  if (!table[post.userId]) {
    table[post.userId] = [];
  }
  table[post.userId].push(post);
  return table;
}, {});
console.log(postTable);

//Option A (Most practical)
const userWithPost = users.map((user) => {
  return { ...user, posts: postTable[user.id] || [] };
});

console.log(JSON.stringify(userWithPost));

//Option B (High-performance system)
const userPostMap = new Map();
console.log(userPostMap);

users.forEach((user) => userPostMap.set(user.id, postTable[user.id]));

console.log(userPostMap);
*/
//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.
/*
//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

//30 mins in milliseconds
const INTERVAL = 30 * 60 * 1000;

const getBinningTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  // console.log("before floor", date.getTime()); //epoc time
  const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;
  //console.log("after floor", flooredDate);

  return new Date(flooredDate).toISOString();
};
console.log(getBinningTimeStamp(events[5].timestamp));
console.log(getBinningTimeStamp(events[3].timestamp));
console.log(getBinningTimeStamp(events[4].timestamp));
//

const binnedData = events.reduce((table, event) => {
  const bin = getBinningTimeStamp(event.timestamp);
  if (!table[bin]) {
    table[bin] = { total: 0 };
  }
  table[bin].total += 1;
  return table;
}, {});
console.log(binnedData);
*/
