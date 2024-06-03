//multiple inputs using default props in functional component
import React from "react";

function Multii1({ name, rollno }) {
    return (

        <
        p > < h2 > multiple inputs using defaultprops in functional component < /h2>Name is { name }
        and rollnumber is { rollno } < /p>)
    }


    Multii1.defaultProps = {
        name: "jhohith",
        rollno: "2356"
    }

    export default Multii1;