
//Question 1:
const input = {
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
};

const result = {};

for (const key in input) {
  let sum = 0;
  for (const value of input[key]) {
    sum += value;
  }
  result[key] = sum;
}

console.log(result);



//Question 2:

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = {};

for (const word of words) {
  counts[word] = (counts[word] || 0) + 1;
}

console.log(counts);



//Question 3 
const input1 = { a: "x", b: "y", c: "z" };

const swapped = {};

for (const key in input1) {
  swapped[input1[key]] = key;
}

console.log(swapped);


//Question 4

const input2 = { a: 10, b: 50, c: 20 };

let maxKey = null;
let maxValue = -Infinity;

for (const key in input2) {
  if (input2[key] > maxValue) {
    maxValue = input2[key];
    maxKey = key;
  }
}

console.log(maxKey);


//Question 5
const input3 = {
  fruits: ["apple", "banana"],
  veggies: ["carrot", "pea"]
};

const result1 = [];

for (const key in input3) {
  result1.push(...input3[key]);
}

console.log(result1);



//Question 6
const people = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
];

const grouped = {};

for (const person of people) {
  if (!grouped[person.city]) {
    grouped[person.city] = [];
  }
  grouped[person.city].push(person.name);
}

console.log(grouped);


//Question 7


const input5 = { a: 20, b: 60, c: 40, d: 90 };

const result3 = {};

for (const key in input5) {
  if (input5[key] > 50) {
    result3[key] = input5[key];
  }
}

console.log(result3);



//Question 6 -1
 const marks = {
  A: [80, 90],
  B: [70, 75, 85]
};

let topStudent = null;
let highestAvg = -Infinity;

for (const student in marks) {
  const scores = marks[student];
  const sum = scores.reduce((a, b) => a + b, 0);
  const avg = sum / scores.length;

  if (avg > highestAvg) {
    highestAvg = avg;
    topStudent = student;
  }
}

console.log(topStudent);


//Question 6 -2
const obj = { name: "Rahul", age: 23, city: "Noida" };
const keys = ["name", "city"];

const result4 = {};

for (const key of keys) {
  if (key in obj) {
    result4[key] = obj[key];
  }
}

console.log(result4);


//Question 6-4

const obj1 = { a: 3, b: 1, c: 2 };

// Convert object to entries, sort by value, keep as array of [key, value]
const sortedEntries = Object.entries(obj1).sort(([, val1], [, val2]) => val1 - val2);

console.log(sortedEntries);


//Question 6-5

const obj2 = { a: 1, b: 2, c: 3 };

// Count keys using Object.keys
const numberOfKeys = Object.keys(obj2).length;

console.log(numberOfKeys);


//Problem 6-6

const obj4 = { name: "alice", city: "delhi" };

const capitalized = {};

for (const key in obj4) {
  const value = obj4[key];
  if (typeof value === "string") {
    capitalized[key] = value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    capitalized[key] = value;
  }
}

console.log(capitalized);

//Problem 6 -8

const arr = [1, 2, 3, 4, 5, 6];

const counts1 = { even: 0, odd: 0 };

for (const num of arr) {
  if (num % 2 === 0) {
    counts1.even++;
  } else {
    counts1.odd++;
  }
}

console.log(counts1);



//Question 6-9


const commonKeys = Object.keys(obj1).filter(key => key in obj2);

console.log(commonKeys);


//Question  6-10

const arr1 = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

const lookup = {};

for (const item of arr1) {
  lookup[item.id] = item;
}

console.log(lookup);


//Qusetion 6-11

const obj5 = { a: 1, b: "hello", c: 3 };

const allNumbers = Object.values(obj5).every(value => typeof value === "number");

console.log(allNumbers);




//20 -Intermdiate 
// Question -1
const transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
];

const totals = {};

for (const tx of transactions) {
  totals[tx.user] = (totals[tx.user] || 0) + tx.amount;
}

console.log(totals);



//Question -2 
//Transform API Response to Object

const arr5 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const lookup1 = {};

for (const item of arr5) {
  lookup1[item.id] = item.name;
}

console.log(lookup1);


//Question -3
//Remove false values from object

const obj6= { a: 0, b: null, c: "hello", d: undefined, e: 5 };

const filtered = {};

for (const key in obj6) {
  if (obj6[key]) {  // truthy check
    filtered[key] = obj6[key];
  }
}

console.log(filtered);


//Question -4
const roles = { admin: ["read","write"], user: ["read"], staff: ["write"] };
const checkRole = "user";
const action = "write";

// Check if role exists and has the action
const hasPermission = roles[checkRole]?.includes(action) || false;

console.log(hasPermission);


//Question -5

const orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
];

const revenue = {};

for (const order of orders) {
  revenue[order.category] = (revenue[order.category] || 0) + order.price;
}

console.log(revenue);

//Question 6

const arr7 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
];

const seen = new Set();
const unique = [];

for (const obj of arr7) {
  if (!seen.has(obj.id)) {
    seen.add(obj.id);
    unique.push(obj);
  }
}

console.log(unique);


//Question -7

const obj8 = { a: 1, b: 2, c: 3, d: 4 };
const size = 2;

const entries = Object.entries(obj8);
const chunks = [];

for (let i = 0; i < entries.length; i += size) {
  chunks.push(entries.slice(i, i + size));
}

console.log(chunks);


//Question -8

const obj9 = { a: "apple", b: "banana", c: "kiwi" };

let longest = "";
for (const key in obj9) {
  if (typeof obj9[key] === "string" && obj9[key].length > longest.length) {
    longest = obj9[key];
  }
}

console.log(longest);


//Question -9
const translations = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
};
const result8 = {};

for (const lang in translations) {
  const entries = translations[lang];
  for (const key in entries) {
    if (!result8[key]) {
      result8[key] = {};
    }
    result8[key][lang] = entries[key];
  }
}

console.log(result8);

//Question -10

const items = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
];


const index = {};

for (const item of items) {
  if (!index[item.category]) {
    index[item.category] = [];
  }
  index[item.category].push(item.id);
}

console.log(index);


//Question 11


const obj10 = { a: { b: { c: 1, d: 2 } } };
const keyToRemove = "c";
function removeKey(obj, keyToRemove) {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [...obj] : { ...obj };

  for (const key in newObj) {
    if (key === keyToRemove) {
      delete newObj[key];
    } else {
      newObj[key] = removeKey(newObj[key], keyToRemove);
    }
  }

  return newObj;
}

const resultq = removeKey(obj10, keyToRemove);
console.log(resultq);


//Question 12 

const ob = { a: { x: 1, y: 2 } };
const ob1 = { a: { x: 1, y: 2 } };



function deepEqual(a, b) {
  if (a === b) return true; // same reference or primitive

  if (typeof a !== "object" || a === null ||
      typeof b !== "object" || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual(ob, ob1)); // true


// Question 13

const obj13 = { a: [1, [2, [3]]], b: [4, [5]] };


function flattenArray(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flattenArray(val) : val), []
  );
}

const flattened = {};
for (const key in obj13) {
  if (Array.isArray(obj13[key])) {
    flattened[key] = flattenArray(obj13[key]);
  } else {
    flattened[key] = obj13[key]; // keep non-arrays as-is
  }
}

console.log(flattened);


//Question 14

const categories = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] };


const wordCounts = {};

// Loop through each category
for (const key in categories) {
  for (const word of categories[key]) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
}

// Find the word with the maximum count
let maxWord = "";
let maxCount = 0;

for (const [word, count] of Object.entries(wordCounts)) {
  if (count > maxCount) {
    maxCount = count;
    maxWord = word;
  }
}

console.log(maxWord);


//Question 15

const ob2 = { a: [1,2,3], b: [2,3,4], c: [3,4,5] };


const arrays = Object.values(ob2);

const intersection = arrays.reduce((acc, arr) => 
  acc.filter(x => arr.includes(x))
);

console.log(intersection);




//Question 16


const o1 = { a: { x: 1, y: 2 } };
const o2 = { a: { y: 3, z: 4 } };


function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

const merged = deepMerge(o1, o2);
console.log(merged);


//Question 17

const o3 = { user: { profile: { name: "Alice", age: 25 } } };

const { user: { profile: { name, age } } } = o3;

console.log(name, age); // Alice 25



//Question -18
const o4 = { a: 10, b: 50, c: 30, d: 40 };
B=2;

const topKeys = Object.entries(o4)       // [["a",10], ["b",50], ...]
  .sort(([, val1], [, val2]) => val2 - val1) // sort descending by value
  .slice(0, B)                             // take top N
  .map(([key]) => key);                     // extract keys

console.log(topKeys);


//Question -19
const people1 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
];


people1.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return a.age - b.age; // if names are same, sort by age
});

console.log(people1);


//Question -20

const expected = ["a","b","c"];
const actual = ["b","c","d"];


const missing = expected.filter(item => !actual.includes(item));
const extra = actual.filter(item => !expected.includes(item));

const result9 = { missing, extra };
console.log(result9);


//Question 21

const o5 = { a: 10, b: 20 };
const o6 = { a: 5, c: 15 };

const merged1 = { ...o5, ...o6 };
console.log(merged1);