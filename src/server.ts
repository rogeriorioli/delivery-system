import express, { Express } from "express";
import routes from "./routes";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();

const mongourl = process.env.mongourl;

mongoose
  .connect(`${mongourl}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("🍃 MongoDB Connected..."))
  .catch((err) => console.log(err));

const app: Express = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.warn("🚀 server run on port 3000"));
