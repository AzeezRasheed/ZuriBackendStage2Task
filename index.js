const express = require("express");
var cors = require("cors");
const app = express();
const task = require("./index.json");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);

app.get("/", async (req, res) => {
  try {
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json("something went wrong");
  }
});

app.post("/", async (req, res) => {
  try {
    const operation_type = req.body.operation_type;
    const num1 = req.body.x;
    const num2 = req.body.y;

    const addition = parseInt(num1) + parseInt(num2);
    const subtraction = parseInt(num1) - parseInt(num2);
    const multiplication = parseInt(num1) * parseInt(num2);

    if (operation_type === "addition") {
      return res.status(200).json({
        slackUsername: "Abdulrasheed",
        operation_type: operation_type,
        result: addition,
      });
    } else if (operation_type === "subtraction") {
      return res.status(200).json({
        slackUsername: "Abdulrasheed",
        operation_type: operation_type,
        result: subtraction,
      });
    } else if (operation_type === "multiplication") {
      return res.status(200).json({
        slackUsername: "Abdulrasheed",
        operation_type: operation_type,
        result: multiplication,
      });
    } else return res.status(200).json("Unknown operation type or value");
  } catch (err) {
    res.status(500).json("something went wrong");
  }
});
