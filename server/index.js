const express = require("express");
const { v4 } = require("uuid");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:8080");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "PATCH, DELETE");
  next();
});

let tasks = [];

const createTask = (task) => ({
  id: v4(),
  checked: false,
  content: task,
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => {
    return t.id !== id;
  });
  console.log(id);
  console.log(tasks);
  return res.status(200).json({
    tasks,
  });
});

app.post("/tasks", (req, res) => {
  const task = req.body.task;
  tasks.push(createTask(task));
  return res.status(200).json({
    tasks,
  });
});

app.patch("/tasks", (req, res) => {
  const { id, checked } = req.body;
  loop1: for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks[i].checked = checked;
      break loop1;
    }
  }
  return res.status(204).json({
    message: "success",
  });
});

app.get("/tasks", (req, res) => {
  return res.status(200).json({
    tasks,
  });
});

app.get("/", (req, res) => {
  return res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("Server now listening at port 3000");
});
