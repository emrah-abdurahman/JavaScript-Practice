// Using file mode strings to alter how Node writes to a file

const fs = require("fs");

fs.unlink("messages-backup-2.bak", (err) => {
  if (err) {
    console.error("The specified file has already been deleted");
    return;
  }
  console.log("The specified file has been deleted");
});

// fs.rename("messages-backup.bak", "messages-backup-2.bak", (err) => {
//   if (err) throw err;
//   console.log("File has been renamed");
// });

// fs.copyFileSync("messages.log", "messages-backup.bak");

// console.log(fs.constants.COPYFILE_EXCL);

// fs.writeFileSync("messages.log", "Hello\n", { flag: "a" }); // The "a" flag opens the file for appending. It does not overwrite existing content

// fs.createWriteStream("messages.log", { flags: "wx" }); // The "wx" flag will open for creating a file and throws an error if the file already exists

// fs.truncate("messages.log", (err) => {
//   if (err) throw err;
//   console.log("path/file.txt was truncated");
// });
