import React from "react";
import {TapeType as Type} from "../App"

const Poloroid = ({description, alt, picture, rotate, tapeColor1, tapeColor2 = tapeColor1, showmoreButton = 0}) => {
    
    const poloroidStyle = {
        backgroundColor: "#FFF",
        border: "3px solid black",
        boxShadow: "3px 3px 15px rgba(0,0,0,0.6)",
        position: "relative",
        minHeight: "15rem",
        margin: "1rem",
        transform: "rotate(" + rotate + "deg)"
    }

    const descStyle = {
        textAlign: "center",
        fontWeight: "Bold"
    }

    const tape1Pos = {
        top: "-35px",
    }

    const tapeBotPos = {
        bottom: "-35px"
    }


    return (
        <figure className="d-flex flex-column p-5 pb-4 my-5 justify-content-between" style={poloroidStyle}>
            <div className={"cosmetic-tape " + tapeColor2} style={tape1Pos}/>
            <img src={picture} alt={alt}/>
            <figcaption className="pt-3 handWritten big" style={descStyle}>{description}</figcaption>
            {showmoreButton == 0 ? <div style={tapeBotPos} className={"cosmetic-tape " + tapeColor1}/> : <button className={"link tape cosmetic-tape " + tapeColor1}><i class="fa-solid fa-reply"></i></button>}
        </figure>
    );
}

export default Poloroid;