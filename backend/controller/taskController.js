const db = require("../config/database");

const createTask = async (req, res) => {
    let conn;  // Declare connection outside of try block to use it in finally
    try {
        // Get connection from pool
        conn = await db.getConnection();

        // Destructure task_name and is_done from request body
        const { task_name, is_done } = req.body;

        // Insert task into the tasks table
        const query = "INSERT INTO tasks (task, is_done) VALUES (?,?)";
        const [result] = await conn.execute(query, [task_name, is_done]);

        // Send success response
        res.status(201).json({
            msg: "Task Created Successfully",
            task: result // Include the new task's ID
        });
    } catch (error) {
        // Log and return an error response
        console.error("Error Creating Task: ", error);
        res.status(500).json({
            msg: "Error creating task",
            error: error.message
        });
    } finally {
        // Ensure connection is released, if it exists
        if (conn) await conn.release();
    }
};



const fetchAllTasks = async (req, res) => {
  let conn;  // Declare connection variable

  try {
    // Get the connection from the pool and assign to conn
    conn = await db.getConnection();

    // Define query to fetch all tasks
    const query = "SELECT * FROM tasks";

    // Execute the query
    const [rows] = await conn.execute(query);

    // Send a success response with the fetched tasks
    res.status(200).json({
      data: rows
    });

  } catch (error) {
    // Log the error and send an error response
    console.error("Error Fetching All Tasks", error);
    res.status(500).json({
      msg: "Error fetching tasks",
      error: error.message
    });
  } finally {
    // Ensure the connection is released if it exists
    if (conn) await conn.release();
  }
};

const fetchTaskBYID = async (req, res) => {
    let conn; // Declare connection variable

    try {
        const id = +(req.params.id); // Convert ID to a number

        // Get the connection from the pool
        conn = await db.getConnection();

        // Use a parameterized query to prevent SQL injection
        const query = `SELECT * FROM tasks WHERE id = ?`;
        const [rows] = await conn.execute(query, [id]); // Pass ID as a parameter

        // Check if any task was found
        if (rows.length === 0) {
            return res.status(404).json({
                msg: "Task not found"
            });
        }

        // Send the found task
        res.status(200).json({
            data: rows[0] // Return the first (and should be the only) row
        });

    } catch (error) {
        console.error("Error Fetching Task", error);
        res.status(500).json({
            msg: "Error fetching task",
            error: error.message
        });
    } finally {
        // Ensure the connection is released if it exists
        if (conn) await conn.release();
    }
};


const updateTaskById = async (req, res) => {
    let conn;  // Declare connection variable
    try {
        // Get the ID from the request parameters and parse it as an integer
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ msg: "Invalid ID" });
        }

        // Get the connection from the pool
        conn = await db.getConnection();

        // Destructure task_name and is_done from request body
        const { task_name, is_done } = req.body;

        // Define the update query (added comma before updated_at)
        const query = "UPDATE tasks SET task = ?, is_done = ?, updated_at = ? WHERE id = ?";
        const [result] = await conn.execute(query, [task_name, is_done, new Date(), id]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Task not found" });
        }

        // Log the result for debugging
        console.log("result ->", result);

        // Send success response
        res.status(200).json({ msg: "Task updated successfully." });

    } catch (err) {
        console.error("Failed to update task:", err);
        res.status(500).json({ error: "Failed to update task" });
    } finally {
        // Ensure the connection is released if it exists
        if (conn) await conn.release();
    }
};

const deleteTaskById = async (req, res) => {
    let conn;  // Declare connection variable
    try {
        // Get the ID from the request parameters and parse it as an integer
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ msg: "Invalid ID" });
        }

        // Get the connection from the pool
        conn = await db.getConnection();

        // Define the delete query
        const query = "DELETE FROM tasks WHERE id = ?";
        const [result] = await conn.execute(query, [id]);

        // Check if any rows were affected
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Task not found" });
        }

        // Log the result for debugging
        console.log("Delete result ->", result);

        // Send success response
        res.status(200).json({ msg: "Task deleted successfully." });

    } catch (err) {
        console.error("Failed to delete task:", err);
        res.status(500).json({ error: "Failed to delete task" });
    } finally {
        // Ensure the connection is released if it exists
        if (conn) await conn.release();
    }
};



module.exports = {
    fetchAllTasks,
    createTask,
    fetchTaskBYID,
    updateTaskById,
    deleteTaskById
}