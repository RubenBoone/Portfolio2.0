import React from "react";
import TapeLink from "./tape";

const SocialLinks = () => {

    const listStlye = {
        listStyle: "none"
    }

    return (
            <ul className="col-lg-6 d-flex flex-column justify-content-center" style={listStlye}>
                <TapeLink text="Twitter / X" link="https://twitter.com/RealRubertoh" color="blue" degree="5"/>
                <TapeLink text="LinkedIn" link="https://be.linkedin.com/in/rubenboone" color="red" degree="-2"/>
                <TapeLink text="Github" color="pink" link="https://github.com/RubenBoone" degree="3"/>
                <TapeLink text="E-mail" color="green" link="mailto:ruben.boone01@gmail.com"degree="5"/>
                <TapeLink text="CV" color="yellow" link="/path/to/file" degree="-3" download={1}/>
            </ul>
    );
}

export default SocialLinks;