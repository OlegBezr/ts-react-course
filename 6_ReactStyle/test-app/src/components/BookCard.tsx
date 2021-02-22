import React from "react";
import { useState } from "react";
import { Book } from "../models/Book";
import { StyledDiv } from "./StyledDiv";

function BookCard(props : {book: Book}) {
    let book = props.book;
    let [displayImage, setDisplayImage] = useState(true);

    return (
        <StyledDiv style={{
            backgroundColor: book.backgroundColor
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
        </StyledDiv>
    );
}

export {BookCard};