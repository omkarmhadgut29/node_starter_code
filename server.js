import express from "express";
import * as dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDb } from "./config/dbConnection.js";

dotenv.config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// Write all Routes here

//

// Ending Code
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listen on port ${port}`);
});
