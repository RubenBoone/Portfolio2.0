import React from "react";
import TapeLink from "./tape";

const SocialLinks = () => {

    const listStlye = {
        listStyle: "none"
    }

    return (
        <div className="my-5">
            <h2 className="handWritten mx-5"><mark>Social links</mark></h2>
            <ul className="d-flex px-5 flex-column flex-grow-1 justify-content-center align-self-center" style={listStlye}>
                <TapeLink text="Twitter / X" link="https://twitter.com/RealRubertoh" color="blue" rotate="5"/>
                <TapeLink text="LinkedIn" link="https://be.linkedin.com/in/rubenboone" color="red" rotate="-2"/>
                <TapeLink text="Github" color="pink" link="https://github.com/RubenBoone" rotate="3"/>
                <TapeLink text="E-mail" color="green" link="mailto:ruben.boone01@gmail.com"rotate="5"/>
                <TapeLink text="CV" color="yellow" link="/path/to/file" rotate="-3" download={1}/>
            </ul>
        </div>
    );
}

export default SocialLinks;