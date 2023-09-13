import React from "react";
import { Link } from "react-router-dom"

const TapeLink = ({text, link, download=0, color}) => {

    if (download) {
        return (
            <li className="my-1 link" ><a className={"p-3 tape " + color + "-tape"} href={link} download>{text}</a></li>
        );
    }

    return (
        <li className="my-1 link"><a className={"p-3 tape " + color + "-tape"} href={link} target="_blank">{text}</a></li>
    );
}

export default TapeLink;