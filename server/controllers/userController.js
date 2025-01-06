import db from "../utils/db.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(200).json({ success: false, message: 'Email and password are required' });
        }

        const query = 'SELECT * FROM users WHERE email = ?';
        db.query(query, [email], async (err, result) => {
            if (err) {
                console.error(err.message, 'Database error');
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (result.length === 0) {
                return res.status(200).json({ success: false, message: 'User not found' });
            }

            return res.status(200).json({ success: true, message: 'Login successful', result });
        });
    } catch (error) {
        console.error(error.message, 'loginController');
        return res.status(500).json({ message: 'Internal server error' });
    }
};



export const getAllDataController = (req, res) => {
    const { email } = req.body
    try {
        const query = "SELECT * FROM users where email=?";

        db.query(query, [email], (err, result) => {
            if (err) {
                console.error(err.message, "Database error");
                return res.status(500).json({ success: false, message: "Internal server error" });
            }

            if (result.length === 0) {
                return res.status(404).json({ success: false, message: "No data found" });
            }

            return res.status(200).json({ success: true, result });
        });
    } catch (error) {
        console.error(error.message, "getAllDataController error");
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const getTodoController = (req, res) => {
 
    try {
        const query = "SELECT * FROM todos";

        db.query(query,  (err, result) => {
            if (err) {
                console.error(err.message, "Database error");
                return res.status(500).json({ success: false, message: "Internal server error" });
            }

            if (result.length === 0) {
                return res.status(404).json({ success: false, message: "No data found" });
            }

            return res.status(200).json({ success: true, result });
        });
    } catch (error) {
        console.error(error.message, "getTodoController error");
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


// createTodoController
export const createTodoController = async (req, res) => {
    try {
        const { task, description, priority } = req.body;

        if (!task || !description || !priority) {
            return res.status(400).send({ success: false, message: "All fields are required" });
        }

        const sql = `SELECT * FROM todos WHERE task = ?`;
        db.query(sql, [task], (err, result) => {
            if (err) {
                console.error(err.message, "Database error");
                return res.status(500).send({ success: false, message: "Internal server error" });
            }

            if (result.length > 0) {
                return res.status(200).send({ success: false, message: "Task already exists" });
            }

            const insertQuery = `INSERT INTO todos (task, description, priority) VALUES (?, ?, ?)`;
            db.query(insertQuery, [task, description, priority], (err, insertResult) => {
                if (err) {
                    console.error(err.message, "Database error during insert");
                    return res.status(500).send({ success: false, message: "Internal server error" });
                }

                return res.status(201).send({ success: true, message: "Task created successfully",result });
            });
        });
    } catch (error) {
        console.log(error.message, "createTodoController");
        return res.status(500).send({ success: false, message: "Server error" });
    }
};


// deleteController

export const deleteController = async (req, res) => {
    try {
        const { id } = req.params; 
        if (!id) {
            return res.status(400).send({ success: false, message: "ID is required" });
        }
        const sql = `DELETE FROM todos WHERE id = ?`;
        
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error("Database error:", err.message);
                return res.status(500).send({ success: false, message: "Internal server error" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({ success: false, message: "Todo not found" });
            }

            return res.status(200).send({ success: true, message: "Todo deleted successfully" });
        });
    } catch (error) {
        console.error("deleteController error:", error.message);
        return res.status(500).send({ success: false, message: "Server error" });
    }
};

// updatedController
export const updatedController = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, description, priority } = req.body; 
        if (!id) {
            return res.status(400).send({ success: false, message: "ID is required" });
        }

        if (!task || !description || !priority) {
            return res.status(400).send({ success: false, message: "All fields are required" });
        }

        const sql = `UPDATE todos SET task = ?, description = ?, priority = ? WHERE id = ?`;
        db.query(sql, [task, description, priority, id], (err, result) => {
            if (err) {
                console.error("Database error:", err.message);
                return res.status(500).send({ success: false, message: "Internal server error" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).send({ success: false, message: "Todo not found" });
            }

            return res.status(200).send({ success: true, message: "Todo updated successfully" });
        });
    } catch (error) {
        console.error("updatedController error:", error.message);
        return res.status(500).send({ success: false, message: "Server error" });
    }
};

