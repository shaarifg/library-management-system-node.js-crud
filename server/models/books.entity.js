import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  name: String,
  author:String,
  genre:String,
  coverURL:String,
  price:Number
});

export default mongoose.model('books', booksSchema)
