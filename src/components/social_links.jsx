import React from "react";
import Tape from "./tape";

const SocialLinks = () => {

    const listStyle = {
        display: "flex",
        padding: "2rem",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyle: "none",
        flexDirection: "column",
        width: "25%",
    }

    return (
            <ul className="col-md-6 col-lg-12 mx-5" style={listStyle}>
                <Tape text="Twitter / X" link="https://twitter.com/RealRubertoh" color="blue" degree="5"/>
                <Tape text="LinkedIn" color="red" degree="-2"/>
                <Tape text="Github" color="pink" degree="3"/>
                <Tape text="E-mail" color="green" degree="5"/>
                <Tape text="CV" color="yellow" degree="-3"/>
            </ul>
    );

}

export default SocialLinks;