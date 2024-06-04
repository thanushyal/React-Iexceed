//event handling in functional Component
import React from "react";

function Event() {
    let eventHandling = () => {
        console.log("button clicked");
    }
    return (

        <
        button onclick = { eventHandling } > click < /button>  
    )
}
export default Event;