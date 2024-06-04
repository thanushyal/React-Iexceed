//using react state values changing using setstate
import React, { Component, Components } from "react";
class Electronicsss extends Component {
    constructor() {
        super();
        this.state = {
            prod_name: "fan",
            brand: "buutterfly",
            quantity: "7",
        }
    }
    changevalues() {
        this.setState({
            prod_name: "AC",
            quantity: 9,
        });
    }
    render() {
        return ( <
            div >
            <
            h1 > using State and setstate < /h1> <
            p > Required thing: { this.state.prod_name } < /p>

            <
            button onClick = {
                () => this.changevalues()
            } > MODFIED REQUIRED THING: < /button> <
            p > { this.state.prod_name } < /p> < /
            div >
        )
    }

}
export default Electronicsss;