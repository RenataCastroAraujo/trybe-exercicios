const { Router } = require('express');
const BookController = require('../controllers/bookController');

const router = Router();

router.get('/books', BookController.getAll);

module.exports = router;