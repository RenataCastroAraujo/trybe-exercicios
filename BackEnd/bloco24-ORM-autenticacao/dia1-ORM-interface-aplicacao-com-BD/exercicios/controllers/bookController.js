const BookService = require('../services/bookService');

const getAll = async (req, res) => {
    const books = await BookService.getAll();
    if(!getAll) res.status(400).json({message:'NotFound'});
    res.status(200).json(books);
};

module.exports = {
  getAll,
};