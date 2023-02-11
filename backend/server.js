const PORT = process.env.PORT ?? 8000; // RUNS ON PORT 8000
const express = require("express"); // EXPRESS HANDLES THE BACKEND
const { v4: uuidv4 } = require("uuid"); // UNIQUE ID
const app = express();
const pool = require("./database"); // COMMUNICATE WITH DB
const cors = require("cors");

app.use(cors());
app.use(express.json());
// GET THE TODOS UNDER SPECIFIC EMAIL
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  // SELECTS EVERYTHING FROM TABLE FROM SPECIFIC EMAIL
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    // REPORTS ERROR CODE TO CONSOLE
    console.log(error);
  }
});

// ADDS A NEW TODO TO THE LIST

app.post("/todos", async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4(); // CREATES A UNIQUE ID
  try {
    const newToDo = await pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newToDo); // RETURN NEW TODO AS RESPONSE
  } catch (err) {
    console.log(err);
  }
});

// EDIT A TODO
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    // SQL QUERY TO UPDATE

    const editTodo = await pool.query(
      "UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;",
      [user_email, title, progress, date, id]
    );
    res.json(editTodo);
  } catch (err) {
    console.error(err);
  }
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteToDo = await pool.query("DELETE FROM todos WHERE id =$1;", [
      id,
    ]);
    res.json(deleteToDo);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
