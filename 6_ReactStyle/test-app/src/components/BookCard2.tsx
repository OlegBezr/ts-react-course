import React, { ReactNode } from "react";
import { Book } from "../models/Book";
import { StyledDiv } from "./StyledDiv";

class BookCard2 extends React.Component {
    props : {book: Book, children?: ReactNode};
    state: {displayImage: boolean};

    constructor(props : {book: Book, children?: ReactNode}) {
        super(props);
        this.props = props;
        this.state = {displayImage: true};
    }

    render() {
        let book = this.props.book;

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
                <div>
                    {this.props.children}
                </div>
                <br/>
                <button onClick ={
                    () => {
                        let previousState = this.state.displayImage;

                        this.setState({
                            displayImage: !previousState
                        });
                    }
                }>
                <br/>
                </button>
                {this.state.displayImage? <img src={book.image} style={{
                    height: 50
                }}>
                </img>
                : null }
            </StyledDiv>
        );
    }
}

export {BookCard2};