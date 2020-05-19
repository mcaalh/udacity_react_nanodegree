import React, { Component } from 'react'
import BookItem from './BookItem'

export default class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    
    mappingBooks = (books) => {
        if (!books || books.length === 0 || books.error) {
            return (
                <div>
                    No Books found!
                </div>
            )
        }
        return (
          <ol className="books-grid">
            {books.map(b => {
                return (
                  <li key={b.id}>
                    <BookItem
                      book={b}
                      onClickUpdate={this.props.onClickUpdate}
                    />
                  </li>
                );
            })}
          </ol>
        );
    } 

    render() {
        const { books } = this.props;
        return <div>{this.mappingBooks(books)}</div>;
    }
}
