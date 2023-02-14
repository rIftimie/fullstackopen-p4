import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const app = express();
app.use(cors());
app.use(json());
import blogsRouter from "./controllers/blogs.js";
import mongoose, { connect } from "mongoose";

import cors from "cors";

const PORT = process.env.PORT_ENV;
const CANDY = process.env.CANDY_ENV;

const mongoUrl = `mongodb+srv://admin:${CANDY}@cluster0.7dhtsjo.mongodb.net/blogList?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
connect(mongoUrl);

app.use("/api/blogs", blogsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
