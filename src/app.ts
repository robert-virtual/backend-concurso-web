if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
import express from "express";
import { createServer } from "http"
import {Server} from "socket.io"
import cors from "cors";

import peronasRouter from "./routes/personas";
const app = express();
const server  = createServer(app)
const io  = new Server(server)

const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/personas", peronasRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
