const express = require("express");
const app = express();
const port = 3001;
const path = "initial.json";

// app.use(express.static("/api/v1"));

app.use("/api/v1", express.static("api/v1"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
console.log("  GET /hello.txt");
