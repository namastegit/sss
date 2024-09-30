const express = require("express");
const taskRouter = require("./routes/taskRouter");

const app = express();
app.use(express.json());  // Handles JSON bodies (for POST/PUT requests)

app.use("/api/v1/tasks", taskRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port number: ", PORT);
});
