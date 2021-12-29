const wr = require("./../lib");
const fs = require("fs");

wr("water", "en", "fr", (r) => {
  fs.writeFile("example.json", r, (err) => {
    if (err) throw err;
    console.log("test complete");
  });
});
