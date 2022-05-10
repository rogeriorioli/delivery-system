import express, { Express } from "express";
import clientRoutes from "./client/routes";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import enterpriseRoutes from "./enterprise/routes";

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

app.use(express.json({ limit: '250mb' }));


app.use(clientRoutes, enterpriseRoutes);

app.listen(process.env.port, () =>
  console.warn(`🚀 server run on port ${process.env.port}`)
);
