import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

import fire from '../config/firebase';
import BookForm from './bookForm';
import DisplayBooks from './displayBooks'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], dataToEdit: {} };
  }
  componentWillMount(){
    /* Create reference to books in Firebase Database */
    let booksRef = fire.database().ref('books').orderByKey().limitToLast(100);
    booksRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { id: snapshot.key, bookName: snapshot.val().book, authorName: snapshot.val().author, description: snapshot.val().description };
      this.setState({ books: [message].concat(this.state.books) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('books').push( {'text': this.inputEl.value, 'title': this.bookName.value});
    this.inputEl.value = ''; // <- clear the input
    this.bookName.value = '';
  }

  render() {
    return (
      <div>
      <div style={{textAlign:"center", fontWeight: "bold", fontSize: 24, marginTop: 20}}>
      {'Welcome to Library Management System'}
      </div>
      <HashRouter>
      <div style={{textAlign:"center", fontWeight: "bold", fontSize: 22, marginTop: 40}}>
      <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/bookForm'>Add a Book</Link>&nbsp;&nbsp;&nbsp;
      <Link to='/displayBooks'>Show All Books</Link>
      </div>
        <Route path='/bookForm' render={(routeProps) => (
          <BookForm {...routeProps} books={this.state.books} bookToEdit={this.state.dataToEdit? this.state.dataToEdit : ''} />
        )} />
        <Route path='/displayBooks'
        render={(routeProps) => (
          <DisplayBooks {...routeProps} books={this.state.books} editItem={this.editItem} />
        )} />
      </HashRouter>
      </div>
    );
    /*
    <div>
    <BookForm books={this.state.books} bookToEdit={this.state.dataToEdit? this.state.dataToEdit : ''} />
    <DisplayBooks books={this.state.books} editItem={this.editItem} />
    </div>*/
  }
}

export default Dashboard;
