const PORT = process.env.PORT ?? 8000; // RUNS ON PORT 8000
const express = require("express"); // EXPRESS HANDLES THE BACKEND
const app = express();
const pool = require("./database");
const cors = require("cors");

app.use(cors());
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

app.post("/todos", (req, res) => {
  const { user_email, title, progress, date } = req.body;
  try {
    pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
