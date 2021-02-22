import { useState } from "react";
import { Book } from "../models/Book";

function BookCard(props : {book: Book}) {
    let book = props.book;
    let [displayImage, setDisplayImage] = useState(true);

    return (
        <div style={{
            width: 200,
            height: 200,
            backgroundColor: book.backgroundColor,
            display: 'grid',
            margin: 'auto',
            justifyItems: 'center',
            alignSelf: 'center',
            borderWidth: 3,
            borderColor: "black",
            borderStyle: "solid",
            padding: 10,
            marginBottom: 10,
        }}>
            <h3>
                {book.title}
            </h3>
            <br/>
            <text>
                {book.description}
            </text>
            <br/>
            <button onClick ={
                () => {
                    setDisplayImage(!displayImage);
                }
            }>
            <br/>
            </button>
            {displayImage? <img src={book.image} style={{
                height: 50
            }}>
            </img>
            : null }
        </div>
    );
}

export {BookCard};