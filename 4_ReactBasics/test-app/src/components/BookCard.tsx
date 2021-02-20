import { Book } from "../models/Book";

function BookCard(props : {book: Book}) {
    let book = props.book;

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
            {book.displayImage? <img src={book.image} style={{
                height: 50
            }}>
            </img>
            : null }
        </div>
    );
}

export {BookCard};