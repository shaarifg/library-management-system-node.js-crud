import express from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "../controllers/books.controller.js";
const router = express.Router();

router.post("/books", addBook);
router.get("/books/:id", getBookById);
router.get("/books", getAllBooks);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
