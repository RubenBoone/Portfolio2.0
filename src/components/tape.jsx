import React from "react";

const TapeLink = ({text, link, download=0, color, rotate = 0}) => {

    const rotateStyle = {
        transform: "rotate(" + rotate + "deg)"
    }

    if (download) {
        return (
            <li className="my-3 link" style={rotateStyle} ><a className={"p-3 tape " + color + "-tape"} href={link} download>{text}</a></li>
        );
    }

    return (
        <li className="my-3 link" style={rotateStyle}><a className={"p-3 tape " + color + "-tape"} href={link} target="_blank">{text}</a></li>
    );
}

export default TapeLink;