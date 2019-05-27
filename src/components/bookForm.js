import React, { Component } from 'react';
import fire from '../config/firebase';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], searchedBooks: '', noBookError: '', updateMode: false };
  }

  addBook(e){
    e.preventDefault(); /* prevent form submit from reloading the page */
    /* Save books to Firebase Database */
    fire.database().ref('books').push( {'book': this.inputEl.value, 'author': this.bookName.value, 'description': this.description.value});
    alert('Book Added Successfully')
    this.inputEl.value = '';
    this.bookName.value = '';
    this.description.value = '';
  }


  render() {
    return (
      <div style={{textAlign:"center"}}>
      <br/><br/>
      <div style={{marginLeft: 20}}>
      {(this.state.updateMode === false) &&
        <div>
        <div>Please fill all the details to add a book</div>
        <br/>
        <form onSubmit={this.addBook.bind(this)}>
          Book Name: <input type="text" ref={ el => this.inputEl = el } required />
          <br/><br/>
          Book Author: <input type="text" ref={ el => this.bookName = el } required />
          <br/><br/>
          Book Description: <input type="text" ref={ el => this.description = el } required />
          <br/><br/>
          <input type="submit" value="Add new book"/>
        </form>
        </div>
      }
      {(this.state.updateMode === true) &&
        <div>
        <div>Edit book details</div>
        <br/>
        <form onSubmit={this.addBook.bind(this)}>
          Book Name: <input type="text" ref={ el => this.inputEl = el }/>
          <br/><br/>
          Book Author: <input type="text" ref={ el => this.bookName = el }/>
          <br/><br/>
          <input type="submit" value="Add new book"/>
        </form>
        </div>
      }
      </div>
      </div>
    );
  }
}

export default BookForm;
