import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import HomePage from './pages/HomePage';
import AddBooksPage from './pages/AddBooksPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }

  getBooksByQuery = async (term) => {
    const books = await BooksAPI.search(term);
    this.setState(() => ({ books }));
  }

  updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              books={this.state.books}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />

        <Route
          path="/search"
          render={({ history }) => (
            <AddBooksPage
              books={this.state.books}
              getBooksByQuery={this.getBooksByQuery}
              updateBookShelf={this.updateBookShelf}
              onReturnHome={() => {
                this.getAllBooks();
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
