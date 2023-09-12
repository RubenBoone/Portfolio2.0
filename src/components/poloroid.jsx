import React from "react";

const Poloroid = ({name, description, picture, color="red", degree=0, tapeDegree=-40}) => {
    
    const poloroidHolderTopStyle = {
        content: "hah",
        display: "block",
        position: "absolute",
        margin: "auto",
        width: "30%",
        height: "10%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        top: "0",
        left: "-25px",
        transform: "rotate(" + tapeDegree + "deg)"
    }

    const poloroidHolderBottomStyle = {
        content: "",
        display: "block",
        position: "absolute",
        margin: "auto",
        width: "30%",
        height: "10%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        bottom: "0",
        right: "-20px",
        transform: "rotate(" + tapeDegree + "deg)"
    }

    const poloroidStyle = {
        border: "3px solid black",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        background: "#fff",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "300px",
        margin: "2rem",
        position: "relative",
        transform: "rotate(" + degree + "deg)"
    }
    
    const imageStyle = {
        maxWidth: "100%"
    }
    
    const descriptionStyle = {
        textAlign: "center",
        fontFamily: "Caveat, cursive",
        fontSize: "1.7rem",
        fontWeight: "bold",
        marginTop: "20px"
    }

    return (
            <figure className="poloroid col-md-12 col-lg-6" style={poloroidStyle}>
                <div style={poloroidHolderTopStyle} className={color}/>
                <img src={picture} alt={"Picture of " + name} style={imageStyle}/>
                <figcaption style={descriptionStyle}>{description}</figcaption>
                <div style={poloroidHolderBottomStyle} className={color}/>
            </figure>
    );
}

export default Poloroid;