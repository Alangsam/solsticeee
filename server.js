const express = require("express");
const app = express();
const path = "initial.json";

// app.use(express.static("/api/v1"));

app.use("/api/v1", express.static("api/v1"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3013;
app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);
