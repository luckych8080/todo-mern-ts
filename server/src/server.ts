import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/todo";

const app: Express = express();

const PORT: string | number = 8080;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);

const url: string = "mongodb://127.0.0.1:27017/todots";

mongoose
  .connect(url)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    throw error;
  });
