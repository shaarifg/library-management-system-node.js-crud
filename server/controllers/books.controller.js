import booksModel from "../models/books.entity.js";

const addBook = async (req, res) => {
  const bookData = req.body;
  try {
    const book = await booksModel.create({
      name: bookData.name,
      author: bookData.author,
      genre: bookData.genre,
      coverURL: bookData.coverURL,
      price: bookData.price,
    });
    console.log(book);
    if (book) {
      return res
        .status(201)
        .send({ message: "Book added successfully", data: book });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await booksModel.find();
    if (books) {
      return res
        .status(200)
        .send({ message: "found available books", data: books });
    } else {
      return res.status(204).send({ message: "Not found" });
    }
  } catch (error) {
    return res.status(500).send("Internel Error");
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await booksModel.findById(id);
    if (book) {
      return res
        .status(200)
        .send({ message: "Book found successfully", data: book });
    } else {
      return res.status(204).send({ message: "Not Found" });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Internal Server Error", error: error });
  }
};


//Function to update a book
const updateBook = async (req, res) => {
  const id = req.params.id;
  const newData = req.body
  console.log(id)
  try {
    const updatedBook = await booksModel.findByIdAndUpdate(id, {
      name: newData.name,
      author: newData.author,
      genre: newData.genre,
      coverURL: newData.coverURL,
      price: newData.price,
    });
    console.log(updatedBook)
    if(updatedBook) {
      return res.status(200).send({ message: "book updated successfully" });
    } else {
      return res.status(404).send({ message: "book not found" });
    }
  } catch (error) {
    return res.status(500).send("Error");
  }
};


//Function to delete a book
const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await booksModel.findByIdAndDelete(id);
    if (book) {
      return res.status(200).send({ message: "book deleted successfully" });
    } else {
      return res.status(404).send({ message: "book not found" });
    }
  } catch (error) {
    return res.status(500).send("Error");
  }
};

export { addBook, deleteBook, getAllBooks, getBookById, updateBook };
