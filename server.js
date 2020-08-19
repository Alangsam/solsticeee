const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static("/api/v1"));
//track my shit please
app.use("/api/v1", express.static("api/v1"));

// app.get("/", function (req, res) {
//     res.render("index", {});
// });
app.use(express.static("client/build"));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);
