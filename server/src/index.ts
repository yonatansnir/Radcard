import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: 'Working route' })
})

app.listen(5000, () => {
    console.log("Running on port 5000")
})