// Importing required modules
const express = require("express"); // Importing Express framework
require("dotenv").config(); // Loading environment variables from a .env file
const dbConnect = require("./config/database"); // Importing database connection function
const userRoutes = require("./routes/user"); // Importing user routes
const app = express(); // Creating an instance of Express application
var cors = require("cors"); // Importing CORS middleware
const PORT = process.env.PORT || 4000; // Setting the port for the server to listen on, using environment variable or defaulting to 4000 if no environment variable is set

// Using CORS middleware to allow cross-origin requests
app.use(
  cors({
    origin: "*",
  })
);

// Middleware to parse incoming JSON data
app.use(express.json());

// Using (mounting) the user routes for requests starting with "/api/v1"
app.use("/api/v1", userRoutes);

// Starting the Express server on the specified port
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

// Connecting to the database using the dbConnect function
dbConnect();

// Handling GET requests to the root URL "/"
app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
