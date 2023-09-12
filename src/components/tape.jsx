import React from "react";
import { Link } from "react-router-dom"

const Tape = ({text, color, degree = 0, link}) => {

    const tapeStyle = {
        width: "15rem",
        height: "3rem",
        margin: "0.7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Caveat, cursive",
        fontSize: "1.5rem",
        transform: "rotate(" + degree + "deg)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
        textDecoration: "None",
        width: "12rem",
        textAlign: "center",
        color: "#000"
    }

    return (
        <li><a href={link} style={tapeStyle} className={color + " tape "} target="_blank">{text}</a></li>
    );
}

export default Tape;