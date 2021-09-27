const express = require("express");
const app = express();
const path = require("path")
const port = 8000;

const filepath = path.join(__dirname, "../");
app.use(express.static(filepath));

app.listen(port, () => {
    console.log("Listening...");
});