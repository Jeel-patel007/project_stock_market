const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./routes/routes");

// Load environment variables from .env file
config({ path: `.env` });

const app = express();

/**
 * Basic Configuration
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/**
 * Routes Configuration
 */
app.use("/", router);

/**
 * Spinning up server
 */
const PORT = process.env.API_PORT || 3000; // Default port is 3000 if API_PORT is not defined
app.listen(PORT, () => {
  console.log("=================================");
  console.log(`🚀 App listening on the port ${PORT}`);
  console.log("=================================");
});
