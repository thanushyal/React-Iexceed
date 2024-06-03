//multiple inputs in class component
import React, { Component } from 'react';
class Student extends Component {
    render() {
        return <p > < h1 > class components STUDENT DETAILS < /h1> student name = { this.props.name } <br/ >
            department = { this.props.dept } < /p >
    }
}

export default Student;