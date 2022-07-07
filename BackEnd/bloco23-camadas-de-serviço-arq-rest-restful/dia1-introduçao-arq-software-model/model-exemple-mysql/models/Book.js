const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
	const [books] = await connection.execute(
		'SELECT * FROM model_example.books;',
	);
	return books
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;';
  const [book] = await connection.execute(query, [id]);
  if (book.length === 0) return null;
  return book;
};

const isValid = async (title, authorId) => {
  if(!title || typeof title !== 'string' || title.length < 3) return false;
  if(!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  return true;
};

const createBook = async (title, authorId) => {
  connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],)
};

module.exports = {
  getAll,
  getByAuthorId,
  findBookById,
  isValid,
  createBook,
}