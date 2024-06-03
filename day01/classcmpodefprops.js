//multiple inputs in class component using default props

import React, { Component } from 'react';
class Student1 extends Component {
    render() {
        return <p > < h1 > STUDENT DETAILS BY DEFAULT PROPS in class components < /h1> student name = { this.props.studname} <br/ >
            department = { this.props.dept } < br / >
            college = { this.props.clg } < /p >
    }
}

Student1.defaultProps = {
    studname: "harsha",
    dept: "maths",
    clg: "kongu arts",
}

export default Student1;