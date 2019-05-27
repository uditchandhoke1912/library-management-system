import React, { Component } from 'react';

class DisplayBooks extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [], searchedBooks: '', noBookError: '', updateMode: false };
    this.searchBook = this.searchBook.bind(this);
  }

  searchBook() {
    let bookNames = [];
    this.setState({
      searchedBooks: ''
    })
    this.props.books.map(book => {
        bookNames.push(book.bookName);
    })
    if (bookNames.indexOf(this.searchingBook.value) > -1) {
      const filterArray = this.props.books.filter(d => d.bookName === this.searchingBook.value);
      this.setState({
        searchedBooks: filterArray
      })
    } else {
      this.setState({
        noBookError: 'No books found with: ' + this.searchingBook.value
      })
    }
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
      <br /> <br />
      <div>
        Search a book: <input type="text" required ref={ el => this.searchingBook = el } />&nbsp;&nbsp;&nbsp;<input type="button" value="Search" onClick={() => this.searchBook()}/>
      </div>
      <br />
      {(this.state.noBookError === '' && this.state.searchedBooks === '') &&
        <ol style={{textAlign:"center", listStylePosition: "inside"}}>
          { /* Render the list of books */
            this.props.books.map( book =>
              <div>
              <li key={book.id}>{book.bookName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.authorName}
              &nbsp;&nbsp;&nbsp;{book.description}</li>
              <br />
              </div>
            )
          }
        </ol>
      }
      <br /><br />
    {
      this.state.searchedBooks? this.state.searchedBooks.map( book =>
        <li key={book.id}>{book.bookName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{book.authorName}
        &nbsp;&nbsp;&nbsp; {book.description}
        </li>
      )
      : (
        <div>{this.state.noBookError}</div>
      )
    }
    </div>
    );
  }
}

export default DisplayBooks;
