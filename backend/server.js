const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const pool = require('./database');
const cors = require('cors');


app.use(cors());
// GET THE TODOS
app.get('/todos/:userEmail', async (req,res) => {

     const { userEmail } = req.params;
     
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail] );
        res.json(todos.rows);
    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));