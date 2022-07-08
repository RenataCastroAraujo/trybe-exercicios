const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    tittle: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  }, {
    tableName: 'books',
    underscored: true,
  });

  return Book;
};

module.exports = Book;