// find
const numbers = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find((num) => num % 2 === 0);

console.log(firstEvenNumber); // Output: 2

// findOne
const MongoClient = require("mongodb").MongoClient;

// Assume a MongoDB connection has been established

// Finding a document with a specific condition in a collection
const collection = db.collection("books");
const book = await collection.findOne({ genre: "fantasy" });

console.log(book); // Output: The first book with the genre 'fantasy'

// findIndex
const numbers = [1, -2, 3, -4, 5];

const firstNegativeIndex = numbers.findIndex((num) => num < 0);

console.log(firstNegativeIndex); // Output: 1
