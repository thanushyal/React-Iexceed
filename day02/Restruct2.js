//destructing of props in class component
import React, { Component } from 'react';
class Restruct2 extends Component {

    render() {
        const { name, rollno } = this.props;
        return ( <
            >
            < h1 > Destructing of props in class < /h1>< p > STUDENTNAME: { name } < /p > <
            p > ROLLNO: { rollno } < /p></ > );
    }
}
export default Restruct2;