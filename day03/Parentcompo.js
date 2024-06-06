import React, { Component } from "react";
import Childcompo from "./Childcompo";
class Parentcompo extends Component {
    constructor() {
        super()
        this.state = {
            name: "Logu"
        }
        this.displayme = this.displayme.bind(this);
    }
    displayme(mydata) {
        alert(`${this.state.name} ${mydata}`)
    }
    render() {
        return ( <
            div >
            <
            Childcompo NAME = { this.displayme }
            /> < /
            div >
        )
    }
}
export default Parentcompo;