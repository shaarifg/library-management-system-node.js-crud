import express from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/books.controller.js";
import { verifyUser } from "../middlewares/auth.js";
const router = express.Router();

router.post("/books", verifyUser, addBook);
router.get("/books/:id", getBookById);
router.get("/books", getAllBooks);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
