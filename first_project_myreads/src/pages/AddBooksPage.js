import React, { Component } from 'react';
import BooksList from '../components/BooksList';

export default class AddBooksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.onTermChange = this.onTermChange.bind(this);
    }

    onTermChange = (term) => {
            this.setState(() => ({
                searchTerm: term.trim()
            }))
        this.props.getBooksByQuery(term.trim());
        // this.props.onSearchTerm(term);
    }

    updateShelf = (book, shelf) => {
        this.props.updateBookShelf(book, shelf);
    }

    render() {
        const {books, onReturnHome} =this.props;
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={onReturnHome}>
                Close
              </button>

              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={(event) => this.onTermChange(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <BooksList books={books} onClickUpdate={this.updateShelf} />
            </div>
          </div>
        );
    }
}
