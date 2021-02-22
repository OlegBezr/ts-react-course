import React from "react";
import { Book } from "../models/Book";
import { StyledDiv } from "./StyledDiv";

function BookCard(props : {book: Book}) {
    let book = props.book;

    return (
        <StyledDiv>
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
        </StyledDiv>
    );
}

export {BookCard};