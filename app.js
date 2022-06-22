import express from "express";
import cors from "cors"; 
import bodyParser from 'body-parser';
import router from "./router/journal.js";

// import { router } from "./router/journals.js"
const PORT = process.env.port || 3000;

//Initialise app
const app = express();
app.use(cors())
app.use(express.json());

// journal router
app.use("/journal", router);


// // create application/json parser
// const jsonParser = bodyParser.json()

// app.post('/journal', jsonParser, function (req, res) {
//   // create user in req.body
// })

//hand the router to app
// app.use("/", router);

// test route
app.get("/", function (req, res) {
    res.json({ message: "Hello from the root path!" });
});

app.listen(PORT, function () {
  console.log(`Listenting on port ${PORT}`);
});