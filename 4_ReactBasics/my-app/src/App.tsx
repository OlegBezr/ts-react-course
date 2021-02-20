import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BookCard } from './components/BookCard';
import { Person } from './models/person';
import { BookCardData } from './models/BookCardData';

function App() {
  let oleg = new Person('Oleg', 17);
  let vitalya = new Person('Vitalya', 17);

  let check = true;

  let data = [
    new BookCardData('Book', 'A great book', oleg),
    new BookCardData('Book2', 'Surprise! Amazing ending', vitalya),
    new BookCardData('Book', 'A great book', oleg),
    new BookCardData('Book2', 'Surprise! Amazing ending', vitalya),
    new BookCardData('Book', 'A great book', oleg),
    new BookCardData('Book2', 'Surprise! Amazing ending', vitalya),
    new BookCardData('Book', 'A great book', oleg),
    new BookCardData('Book2', 'Surprise! Amazing ending', vitalya),
    new BookCardData('Book', 'A great book', oleg),
    new BookCardData('Book2', 'Surprise! Amazing ending', vitalya),
  ]

  return (
    <div className="App">
      {check? <text>CHECKED</text> : <text>UNCHECKED</text>}
      <div style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: "auto auto auto auto auto",
        margin: 'auto',
        justifyItems: 'center',
        alignSelf: 'center'
      }}>
        {data.map((bookCardData) => {
          return (
            <BookCard 
              title={bookCardData.title}
              description={bookCardData.description}
              person={bookCardData.person}
            />
          );
        })}
        {/* <ColorBox title='Title' description='A great story by a great person' person={new Person('Oleg', 17)}/> */}
      </div>
      <button style={{
        height: 100,
        width: 100,
        fontSize: 20,
        textAlign: "center",
      }}>
        Button
      </button>
    </div>
  );
}

export default App;
