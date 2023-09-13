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

    let topTape;
    let botTape;

    switch (TapeType) {
        case Type.Y:
            topTape = "tape-pos-top";
            botTape = "tape-pos-bottom";
            break;
        case Type.LR:
            topTape = "tape-pos-left-1";
            botTape = "tape-pos-right-1";
            break;
        case Type.RL:
            topTape = "tape-pos-left-2";
            botTape = "tape-pos-right-2";
            break;
        case Type.S:
            topTape = "tape-pos-top align-middle";
            botTape = "tape-hide"
            break;
        default:
            break;
    }

    return (
        <figure className="d-flex flex-column p-5 mx-1 my-5 col-lg-5 justify-content-between" style={poloroidStyle}>
            <div className={"tape cosmetic-tape " + topTape + " " + tapeColor1}/>
            <img src={picture} alt={alt}/>
            <figcaption className="pt-5 handWritten big" style={descStyle}>{description}</figcaption>
            <div className={"tape cosmetic-tape " + botTape + " " + tapeColor2}/>
        </figure>
    );
}

export default Poloroid;