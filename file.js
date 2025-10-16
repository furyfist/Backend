const fs = require("fs");

fs.writeFileSync("./test.txt", "hiii this is testing")

const result = fs.readFileSync("./test.txt", "utf-8")
console.log (result)