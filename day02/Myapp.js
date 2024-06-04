//state and setstate using bind 
//fragments

import React, { Component } from "react";
class Myapp extends Component {
    constructor() {
        super();
        this.state = {
            name: "srihariesh",
            age: "22",
            course: "CSE",
            Place: "uthukuli",

        }
        this.changevalue = this.changevalue.bind(this);
    }

    changevalue() {
        this.setState({
            course: "AIML",
        });
    }

    render() {
        return ( <
            >
            <
            p > < h1 > STUDENT DETAILS USING BIND < /h1></p >
            <
            p > Student name { this.state.name } < /p> <
            p > course taken { this.state.course } < /p> <
            button onClick = {
                this.changevalue
            } > MODIFIED COURSE TAKEN < /button>             <
            p > { this.state.course } < /p> < / >
        )
    }
}
export default Myapp;