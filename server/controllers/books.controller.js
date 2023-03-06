import booksModel from '../models/books.entity.js'

const addBook = async(req, res)=>{
    const bookData = req.body;
    try {
        const book = await booksModel.create({
            name:bookData.name,
            author:bookData.author,
            genre:bookData.genre,
            coverURL:bookData.coverURL,
            price:bookData.price,
        })
        console.log(book)
        if(book){
            return res.status(201).send({message:'Book added successfully', data:book})
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}


const getAllBooks = async(req, res)=>{
    try {
        const books = await booksModel.find();
        if(books){
            return res.status(200).send({message:'found available books', data:books})
        }else{
            return res.status(204).send({message:'Not found'})  
        }
        
    } catch (error) {
        return res.status(500).send("Internel Error")
    }
}

const getBookById = async(req, res)=>{
    const id = req.params.id
    try {
        const book = await booksModel.findById(id)
        if(book){
            return res.status(200).send({message:'Book found successfully', data:book})
        
        }else{
            return res.status(204).send({message:'Not Found'})
        }
    } catch (error) {
        return res.status(500).send({message:'Internal Server Error', error:error})
        
    }
}

const updateBook = async(req, res)=>{
    const id = req.params.id
    try {
        const 
    } catch (error) {
        
    }

}
const deleteBook = async(req, res)=>{

}


export {addBook, deleteBook, getAllBooks,getBookById, updateBook}