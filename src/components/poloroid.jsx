import React from "react";
import {TapeType as Type} from "../App"

const Poloroid = ({description, alt, picture, TapeType, tapeColor1, tapeColor2 = tapeColor1}) => {
    
    const poloroidStyle = {
        backgroundColor: "#FFF",
        border: "3px solid black",
        boxShadow: "3px 3px 15px rgba(0,0,0,0.6)",
        position: "relative"
    }

    const descStyle = {
        textAlign: "center",
        fontWeight: "Bold"
    }

    const tapeStyle = {
        display: "Block"
    }

    return (
        <figure className="d-flex flex-column p-5 pb-4 mb-5" style={poloroidStyle}>
            <img src={picture} alt={alt}/>
            <figcaption className="pt-3 handWritten big" style={descStyle}>{description}</figcaption>
        </figure>
    );
}

export default Poloroid;