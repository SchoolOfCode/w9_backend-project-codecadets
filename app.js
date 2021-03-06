import express from "express";
import cors from "cors"; 
import bodyParser from 'body-parser';
import router from "./router/journal.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;

//Initialise app
const app = express();
app.use(cors())
app.use(express.json());

// journal router
app.use("/journal", router);

// test route
app.get("/", function (req, res) {
    res.json({ message: "Hello from the root path!" });
});

app.listen(PORT, function () {
  console.log(`Listenting on port ${PORT}`);
});