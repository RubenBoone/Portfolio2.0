import React from "react";

const PostIt = ({title, listItems, color="#ff6854"}) => {
    
    let items = listItems.map((item, i) => {
        return <li key={i}>{item}</li>
    });

    const postitStyle = {
        backgroundColor: color,
        minHeight: "15rem",
        fontWeight: "bold",
        boxShadow: "3px 3px 15px rgba(0,0,0,0.6)"
    }

    const headerStyle = {
        backgroundColor: "rgba(0,0,0, 0.15)"
    }
    
    const listStyle = {
        height: "100%",
        flexGrow: 1
    }

    return (
        <div className="m-5 p-0 d-flex flex-column col-md-4 col-sm-12" style={postitStyle}>
            <p style={headerStyle} className="handWritten big p-2">{title}</p>
            <ul style={listStyle} className="mx-4 p-3 d-flex flex-column justify-content-around">
                {items}
            </ul>            
        </div>
    );
}

export default PostIt;