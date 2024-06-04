//using react state,setstate
import React, { Component, Components } from "react";
class Electronics extends Component {
    constructor() {
        super();
        this.state = {
            prod_name: "fan",
            brand: "buutterfly",
            quantity: "7",
        }
    }
    render() {
        return ( <
            div >
            <
            h1 > using State and setstate < /h1> <
            p > Required thing: { this.state.prod_name } < /p> < /
            div >
        )
    }

}
export default Electronics;