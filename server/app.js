import express from "express";
import mongoose from "mongoose";
import router from "./routes/books.routes.js";
const app = express();
app.use(express.urlencoded({ extended: false }))

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


app.use('/', router)

app.listen(8080, "localhost", () => {
  console.log(`server is runnnig on http://localhost:8080`);
});
