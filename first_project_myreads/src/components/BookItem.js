import React from 'react'

const BookItem = ({ book, onClickUpdate }) => {
  if (!book) {
    return null;
  }

  const onUpdateShelf = (book, shelf) => {
    onClickUpdate(book, shelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : null
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(event) => onUpdateShelf(book, event.target.value)}
            defaultValue={book.shelf ? book.shelf : "none"}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors[0] : null}
      </div>
    </div>
  );
};

export default BookItem;