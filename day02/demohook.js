//hook
import React, { useState } from "react";

function Demohook() {
    const [name, setName] = useState("SRIHARIESHGOKUL");
    const [name1, setName1] = useState("jhohithgunasekaran");


    return (

        <
        div >
        <
        button onClick = {
            () => setName(name.toLowerCase())
        } > change < /button>   <
        p > { name } < /p>  <
        button onClick = {
            () => setName1(name1.toUpperCase())
        } > changecase < /button>    <
        p > { name1 } < /p>< /
        div > );
}
export default Demohook;