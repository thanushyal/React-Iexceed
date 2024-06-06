import React from "react";

function Childcompo(props) {
    return ( <
        div >
        <
        button onClick = {
            () => props.NAME("hi")
        } > click < /button> < /
        div > );
}
export default Childcompo;