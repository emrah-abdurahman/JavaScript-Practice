const fs = require("fs"); // Require Node's File System module

// console.log("\r\n");

// // Synchronous versions of readFileSync()
// let buffer = fs.readFileSync("data.txt"); // Synchronous, returns buffer
// console.log("readFileSync Buffer:", buffer);
// console.log("\r\n");
// let text = fs.readFileSync("data.txt", "utf8"); // Synchronous, returns string
// console.log("readFileSync String utf8:", text);
// console.log("\r\n");

// // Read the bytes of a file asynchronously
// fs.readFile("data.txt", (err, buffer) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("readFile Buffer:", buffer);
//     console.log("\r\n");
//   }
// });

// // Promise-based asynchronous read
// fs.promises
//   .readFile("data.txt", "utf8")
//   .then((buffer) => {
//     console.log("Promise-based async read:", buffer);
//     console.log("\r\n");
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// // An async function using the await keyword with the readFile Promise-based function
// async function processText(fileName, encoding = "utf8") {
//   let text = await fs.promises.readFile(fileName, encoding);
//   console.log("Async function with promise-based version of readFile:", text);
// }

// processText("data.txt");

// // A function to stream a file to a standard output using a pipe
// function printFile(filename, encoding = "utf8") {
//   console.log("ReadStream to standard output:");
//   fs.createReadStream(filename, encoding).pipe(process.stdout);
// }

// printFile("data.txt");

let output = fs.createWriteStream("numbers.txt");
for (let i = 0; i < 33; i++) {
  output.write(`${i}\n`);
}

output.end();
