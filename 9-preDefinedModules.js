const { readFile, writeFile } = require("fs");

readFile("./content/second.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
}
  const second = result;
  readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    writeFile(
      "./content/result-Async.txt",
      `this is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
         }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task")