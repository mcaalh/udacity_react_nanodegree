import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BooksList from '../components/BooksList';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    getBooksByShelf = (books, shelf) => {
        return books.filter((b) => b.shelf === shelf);
    }

    updateShelf = (book, shelf) => {
        this.props.updateBookShelf(book, shelf);
    }

    render() {
        const { books } = this.props;
        if (!books || books.length === 0) {
            return null;
        }
        return (
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <BooksList
                        books={this.getBooksByShelf(books, "currentlyReading")}
                        onClickUpdate={this.updateShelf}
                      />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <BooksList
                        books={this.getBooksByShelf(books, "wantToRead")}
                        onClickUpdate={this.updateShelf}
                      />
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <BooksList
                        books={this.getBooksByShelf(books, "read")}
                        onClickUpdate={this.updateShelf}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}
