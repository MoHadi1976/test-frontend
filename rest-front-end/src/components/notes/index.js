import React from "react";

export const Notes = ({title, content}) => {

    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}