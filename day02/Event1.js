//event handling in class component

import React, { Component } from "react";
class Event1 extends Component {
    eventHandling() {
        console.log("button clicked");
    }
    render() {
        return ( <
            >

            <
            button onClick = { this.eventHandling } > click me < /button>  <
            p > {
                0 this.eventHandling
            } < /p>< / > );

    }
}
export default Event1;