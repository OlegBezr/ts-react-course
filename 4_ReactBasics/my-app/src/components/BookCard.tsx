import React from "react";
import {Person} from "../models/person";

function BookCard(props: { title: string; description: string; person: Person }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            borderWidth: 3,
            borderColor: "black",
            borderStyle: "solid",
            width: '80%',
            padding: 10,
            margin: 10
        }}>
            <h3 style={{
                color: "green",
                fontWeight: 'bold'
            }}>
                {props.title}
            </h3>
            <text>
                {props.person.name + " " + props.person.age}
            </text>
            <text style={{
                marginBottom: 10
            }}>
                {props.description}
            </text>
            <img 
                src='https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/master/w_2560%2Cc_limit/Heller-Kirkus-Reviews.jpg'
                style={{
                    width: 200,
                    alignSelf: 'center'
                }}
            >

            </img>
        </div>
    );
}

export {BookCard};