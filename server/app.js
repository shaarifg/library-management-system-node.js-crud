import express from "express";
import mongoose from "mongoose";
import router from "./routes/books.routes.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

const dbURL =
  "mongodb+srv://sharif:books@inittial.esx4vlw.mongodb.net/allbooks?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

app.use("/", router);
app.use("/", userRoutes);

app.listen(8080, "localhost", () => {
  console.log(`server is running on http://localhost:${8080}`);
});
