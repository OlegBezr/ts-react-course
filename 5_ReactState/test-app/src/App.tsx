import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BookCard } from './components/BookCard';
import { Book } from './models/Book';
import { Counter } from './components/Counter';

function App() {
  let book1 = new Book(
    "Misery",
    "A great story by Stephen King",
    "white",
    "https://www.artistiqueacres.ca/images/cute-cat.jpg",
  );

  let book2 = new Book(
    "HotDog story",
    "A great story by Alan Spider",
    "orange",
    "https://sun9-48.userapi.com/impg/YoiUxPesntzool0sxNh1dGCnTBj8NZSxU7X4wg/Iku15ReGJLI.jpg?size=400x500&quality=96&proxy=1&sign=332be830733c1259a4516ab8c13db71f&type=album",
  );

  let [books, setBooks] = useState([
    book1,
    book2,
    book1,
    book2,
  ]);

  let [check, setCheck] = useState(true);

  return (
    <div style={{
      width: '100%',
      display: 'grid',
      margin: 'auto',
      justifyItems: 'center',
      alignSelf: 'center'
    }}>
      <text>
        Some text
      </text>
      <div>
        <img src='https://www.artistiqueacres.ca/images/cute-cat.jpg'>
        </img>
      </div>
      {
        check? 
        books.map((book, index) => {
          return (
            <BookCard book={book}/>
          )
        }): null
      }
      {/* <BookCard book={book1}/>
      {check? <BookCard book={book2}/> : null} */}
      <button onClick={
        () => {
          setBooks(books.slice(0, books.length - 1));
        }
      }>
        Удалить
      </button>
      <br/>
      <br/>
      <button onClick={
        () => {
          setCheck(!check);
        }
      }>
        Render
      </button>
      <br/>
      <br/>
      <Counter/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
