import express from "express";
// import { router } from "./router/journals.js"
const port = 3000;

//Initialise app
const app = express();

//hand the router to app
// app.use("/", router);

app.get("/", function (req, res) {
    res.json({ message: "Hello from the root path!" });
});

app.listen(port, function () {
  console.log(`Listenting on port ${port}`);
});